(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var STORAGE_KEY = "site-lang";

  /* =========================================================
     I18N
     ========================================================= */
  function getInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "fr" || saved === "en") return saved;
    return "fr"; // FR par défaut
  }

  function applyLang(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      // format: "attr:key"
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0], key = parts[1];
        if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.description"]) metaDesc.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    restartTerminal(lang);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang]");
    if (!btn) return;
    applyLang(btn.getAttribute("data-lang"));
  });

  /* =========================================================
     Mobile nav
     ========================================================= */
  var navToggleBtn = document.querySelector(".nav-toggle-btn");
  if (navToggleBtn) {
    navToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
    document.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    });
  }

  /* =========================================================
     Scrollspy — active nav link
     ========================================================= */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-menu a"));

  function updateActiveLink() {
    var scrollPos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("active", match);
    });
  }
  if (sections.length) {
    document.addEventListener("scroll", throttle(updateActiveLink, 100), { passive: true });
    updateActiveLink();
  }

  /* =========================================================
     Reveal on scroll
     ========================================================= */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function (el, i) {
      el.style.setProperty("--i", i % 6);
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* =========================================================
     Back to top
     ========================================================= */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    document.addEventListener("scroll", throttle(function () {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    }, 150), { passive: true });
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* =========================================================
     Hero terminal — typing sequence
     ========================================================= */
  var terminalTimer = null;

  function restartTerminal(lang) {
    var target = document.querySelector(".type-target");
    var whoamiOut = document.querySelector("[data-term-whoami-out]");
    if (!target) return;

    clearTimeout(terminalTimer);
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    var roles = [dict["hero.term.role1"], dict["hero.term.role2"], dict["hero.term.role3"], dict["hero.term.role4"]];

    if (whoamiOut) whoamiOut.textContent = "Alexandre Bruno";

    if (prefersReducedMotion) {
      target.textContent = roles[0];
      return;
    }

    var roleIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      var current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        target.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = false;
          terminalTimer = setTimeout(function () { deleting = true; tick(); }, 1400);
          return;
        }
        terminalTimer = setTimeout(tick, 55);
      } else {
        charIndex--;
        target.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          terminalTimer = setTimeout(tick, 300);
          return;
        }
        terminalTimer = setTimeout(tick, 30);
      }
    }
    tick();
  }

  /* =========================================================
     Utils
     ========================================================= */
  function throttle(fn, wait) {
    var last = 0, timer = null;
    return function () {
      var now = Date.now();
      var args = arguments, ctx = this;
      if (now - last >= wait) {
        last = now;
        fn.apply(ctx, args);
      } else {
        clearTimeout(timer);
        timer = setTimeout(function () { last = Date.now(); fn.apply(ctx, args); }, wait - (now - last));
      }
    };
  }

  /* =========================================================
     Gallery lightbox (project pages)
     ========================================================= */
  var galleryItems = document.querySelectorAll(".gallery-item");
  if (galleryItems.length) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Fermer">&times;</button><img alt="">';
    document.body.appendChild(overlay);
    var overlayImg = overlay.querySelector("img");

    function openLightbox(src, alt) {
      overlayImg.setAttribute("src", src);
      overlayImg.setAttribute("alt", alt || "");
      overlay.classList.add("open");
    }
    function closeLightbox() {
      overlay.classList.remove("open");
    }

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        if (img) openLightbox(img.getAttribute("src"), img.getAttribute("alt"));
      });
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.closest(".lightbox-close")) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* =========================================================
     Footer year
     ========================================================= */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     Init
     ========================================================= */
  applyLang(getInitialLang());
})();
