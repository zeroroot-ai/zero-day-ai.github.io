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

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function row(l) {
    return '<span class="' + (l.lead_class || "") + '">' + esc(l.lead || "") + "</span>" +
           '<span class="' + (l.text_class || "") + '">' + esc(l.text || "") + "</span>";
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
      tape.innerHTML = lines.map(row).join("\n") + '<span class="caret"></span>';
    } else {
      var li = 0, ci = 0;
      var render = function (partial) {
        var done = lines.slice(0, li).map(row).join("\n");
        tape.innerHTML = done + (li > 0 ? "\n" : "") + (partial || "") +
                         '<span class="caret"></span>';
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
        render('<span class="' + (l.lead_class || "") + '">' + esc(shown.slice(0, leadLen)) + "</span>" +
               '<span class="' + (l.text_class || "") + '">' + esc(shown.slice(leadLen)) + "</span>");
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
