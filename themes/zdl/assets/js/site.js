/* Zero Day AI Labs. Two small behaviors, no framework.
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

  /* ---- the analytics banner ---- */

  run("consent", function () {
    var box = document.getElementById("consent");
    if (!box) { return; }
    var choice = null;
    try { choice = localStorage.getItem("zdl-consent"); } catch (e) {}
    if (choice === "granted" || choice === "denied") { return; }
    box.hidden = false;
    function decide(value) {
      try { localStorage.setItem("zdl-consent", value); } catch (e) {}
      if (value === "granted" && typeof window.gtag === "function") {
        window.gtag("consent", "update", { analytics_storage: "granted" });
      }
      box.hidden = true;
    }
    box.querySelector("[data-accept]").addEventListener("click", function () { decide("granted"); });
    box.querySelector("[data-decline]").addEventListener("click", function () { decide("denied"); });
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
