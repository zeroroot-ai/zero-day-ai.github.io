/* Zero Day AI Labs. Three small behaviours, no framework.
   Everything here is off when the visitor asks for reduced motion. */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
               window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Each behaviour is independent. Before this guard a single exception in the
     first one killed every one after it, silently, and the page looked merely
     static rather than broken. */
  function run(name, fn) {
    try { fn(); } catch (err) {
      if (window.console) { console.error("[zdl] " + name + " failed:", err); }
    }
  }

  /* ---- the transcript types itself ---- */

  var tape = document.getElementById("tape");
  var store = document.getElementById("tape-data");

  /* Build DOM nodes, never HTML strings.
   *
   * This used to assemble markup by hand and assign it to innerHTML, which
   * CodeQL flagged as js/xss-through-dom (two HIGH alerts). Three separate
   * holes, and patching the escaper would only have closed one:
   *
   *   1. esc() escaped & < > but NOT the double quote, so an escaped value
   *      could still break out of class="...".
   *   2. lead_class and text_class went into that attribute with no escaping
   *      at all.
   *   3. The data is JSON.parse(store.textContent) — text read back out of the
   *      DOM and reinterpreted as HTML, which is the sink itself.
   *
   * createElement + textContent + className has no parser to confuse, so all
   * three stop existing rather than being filtered. The values come from
   * data/demo.yaml today, which is why this was not exploitable; the next
   * person to feed it something else should not have to know that.
   */
  function span(cls, text) {
    var el = document.createElement("span");
    if (cls) { el.className = String(cls); }
    el.textContent = String(text == null ? "" : text);
    return el;
  }
  function rowNodes(l) {
    return [span(l.lead_class, l.lead), span(l.text_class, l.text)];
  }
  function caret() { return span("caret", ""); }
  /* Replace the tape's children with the given nodes, newline-separated. */
  function paint(nodes) {
    while (tape.firstChild) { tape.removeChild(tape.firstChild); }
    nodes.forEach(function (n) { tape.appendChild(n); });
  }
  /* The rendered lines, with a newline text node between each. */
  function linesUpTo(lines, count) {
    var out = [];
    for (var i = 0; i < count; i++) {
      if (i > 0) { out.push(document.createTextNode("\n")); }
      rowNodes(lines[i]).forEach(function (n) { out.push(n); });
    }
    return out;
  }

  run("transcript", function () {
  if (tape && store) {
    var lines = [];
    try {
      var parsed = JSON.parse(store.textContent);
      lines = Array.isArray(parsed) ? parsed : [];
    } catch (e) { lines = []; }

    if (reduce || !lines.length) {
      /* Show it whole. A transcript nobody sees is worse than no animation. */
      paint(linesUpTo(lines, lines.length).concat([caret()]));
    } else {
      var li = 0, ci = 0;
      var render = function (partialNodes) {
        var nodes = linesUpTo(lines, li);
        if (partialNodes && partialNodes.length) {
          if (li > 0) { nodes.push(document.createTextNode("\n")); }
          partialNodes.forEach(function (n) { nodes.push(n); });
        }
        nodes.push(caret());
        paint(nodes);
      };
      render();
      var tick = setInterval(function () {
        if (li >= lines.length) { clearInterval(tick); render(); return; }
        var l = lines[li];
        var whole = (l.lead || "") + (l.text || "");
        if (whole === "") { li++; render(); return; }
        ci += 2;
        var shown = whole.slice(0, ci);
        var leadLen = (l.lead || "").length;
        render([span(l.lead_class, shown.slice(0, leadLen)),
                span(l.text_class, shown.slice(leadLen))]);
        if (ci >= whole.length) { li++; ci = 0; }
      }, 16);
    }
  }
  });

  /* ---- the mark splits and snaps back ---- */

  var mark = document.getElementById("mark");
  var h1 = document.getElementById("h1");

  /* How often the mark splits. One number, on purpose. */
  var GLITCH_EVERY = 5000;
  var reflow = 0;

  function glitch() {
    if (reduce || !mark) { return; }
    mark.classList.remove("glitching");
    if (h1) { h1.classList.remove("glitching"); }
    /* Committing the removal before re-adding is what restarts the animation.
       Reading a layout property forces it. The read is assigned so a minifier
       cannot drop the line as having no effect. */
    reflow = mark.offsetWidth;
    mark.classList.add("glitching");
    if (h1) { h1.classList.add("glitching"); }
  }

  run("glitch", function () {
    if (mark && !reduce) {
      setTimeout(glitch, 500);
      mark.addEventListener("mouseenter", glitch);
      setInterval(glitch, GLITCH_EVERY);
    }
  });

  /* ---- type the handle ---- */

  var buf = "";
  window.addEventListener("keydown", function (e) {
    if (!e.key || e.key.length !== 1) { return; }
    buf = (buf + e.key.toLowerCase()).slice(-8);
    if (buf === "zerocool") {
      document.body.classList.toggle("invert");
      glitch();
    }
  });
})();
