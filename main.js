(function () {
  "use strict";

  if (!window.matchMedia) {
    window.matchMedia = function () {
      return { matches: false, addListener: function () {}, removeListener: function () {} };
    };
  }
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var doc = document.documentElement;

  var galleryItems = [
    { name: "gallery-05", ext: "jpg", cls: "g-wide",  alt: "A wide view of the Zion Telugu Church family together" },
    { name: "gallery-10", ext: "jpg", cls: "g-tall",  alt: "Congregation of Zion Telugu Church Halifax during worship" },
    { name: "gallery-14", ext: "jpg", cls: "g-sm",    alt: "Church members sharing fellowship together" },
    { name: "gallery-09", ext: "jpg", cls: "g-sm",    alt: "A moment of worship at Zion Telugu Church" },
    { name: "gallery-08", ext: "jpg", cls: "g-big",   alt: "The full church gathered together after the service" },
    { name: "gallery-11", ext: "jpg", cls: "g-tall",  alt: "Members of the church sharing a meal of fellowship" },
    { name: "gallery-07", ext: "jpg", cls: "g-sm",    alt: "Worship and praise during the Sunday service" },
    { name: "gallery-01", ext: "jpg", cls: "g-sm",    alt: "Zion Telugu Church worship group gathering" },
    { name: "gallery-06", ext: "jpg", cls: "g-wide",  alt: "A panorama of the congregation in the church hall" },
    { name: "gallery-13", ext: "jpg", cls: "g-tall",  alt: "Sunday school children at Zion Telugu Church" },
    { name: "gallery-12", ext: "jpg", cls: "g-sm",    alt: "A cherished moment together in fellowship" },
    { name: "gallery-02", ext: "jpg", cls: "g-sm",    alt: "The choir and worship team leading the congregation" },
    { name: "gallery-04", ext: "jpg", cls: "g-wide",  alt: "The church community gathered in the hall" },
    { name: "gallery-03", ext: "jpg", cls: "g-sm",    alt: "A moment of prayer during the service" },
    { name: "gallery-15", ext: "jpg", cls: "g-sm",    alt: "Friends of the church in joyful fellowship" }
  ];

  var anniversaryItems = [
    { name: "anniv-01", ext: "jpg" }, { name: "anniv-02", ext: "jpg" },
    { name: "anniv-03", ext: "jpg" }, { name: "anniv-04", ext: "jpg" },
    { name: "anniv-05", ext: "jpg" }, { name: "anniv-06", ext: "jpg" },
    { name: "anniv-07", ext: "jpg" }, { name: "anniv-08", ext: "jpg" },
    { name: "anniv-09", ext: "jpg" }, { name: "anniv-10", ext: "jpg" }
  ];

  var specialItems = [
    { name: "special-01", ext: "jpg" }, { name: "special-02", ext: "jpg" },
    { name: "special-03", ext: "jpg" }, { name: "special-04", ext: "jpg" },
    { name: "special-05", ext: "jpg" }, { name: "special-06", ext: "jpg" },
    { name: "special-07", ext: "jpg" }, { name: "special-08", ext: "jpg" },
    { name: "special-09", ext: "jpg" }, { name: "special-10", ext: "jpg" }
  ];

  function src(name, ext, suffix) {
    return "images/site/" + name + "-" + suffix + "." + ext;
  }

  var lbGroups = [];
  var lbStates = [];

  function registerGroup(items, altFn) {
    var group = [];
    for (var i = 0; i < items.length; i++) {
      group.push({ src: src(items[i].name, items[i].ext, "xl"), alt: altFn ? altFn(items[i], i) : "Photo from the life of Zion Telugu Church Halifax" });
    }
    lbGroups.push(group);
    return lbGroups.length - 1;
  }

  function buildGallery() {
    var grid = document.getElementById("gallery-grid");
    if (!grid) return;
    var groupIndex = registerGroup(galleryItems, function (item) {
      var found = null;
      for (var i = 0; i < galleryItems.length; i++) {
        if (galleryItems[i].name === item.name) { found = galleryItems[i]; break; }
      }
      return found ? found.alt : "";
    });

    var frag = document.createDocumentFragment();
    for (var i = 0; i < galleryItems.length; i++) {
      var item = galleryItems[i];
      var thumb = (item.cls === "g-wide" || item.cls === "g-big") ? "lg" : "sm";
      var el = document.createElement("button");
      el.className = "g-item " + item.cls;
      el.type = "button";
      el.setAttribute("aria-label", item.alt + " — open full screen");
      var img = document.createElement("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.src = src(item.name, item.ext, thumb);
      img.alt = item.alt;
      img.width = 680;
      img.height = 680;
      el.appendChild(img);
      el.dataset.lb = String(groupIndex);
      el.dataset.lbi = String(i);
      frag.appendChild(el);
    }
    grid.appendChild(frag);
  }

  var eventGroups = [];

  function buildEventStrip(groupItems, containerId, picks, altText) {
    var wrap = document.getElementById(containerId);
    if (!wrap) return;
    var gIdx = registerGroup(groupItems);
    eventGroups.push({ groupItems: groupItems, gIdx: gIdx, picks: picks });
    var frag = document.createDocumentFragment();
    for (var i = 0; i < picks.length; i++) {
      var item = picks[i];
      var el = document.createElement("button");
      el.className = "ep";
      el.type = "button";
      el.setAttribute("aria-label", altText);
      var img = document.createElement("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.src = src(item.name, item.ext, "lg");
      img.alt = altText;
      el.appendChild(img);
      el.dataset.lb = String(gIdx);
      el.dataset.lbi = String(groupItems.indexOf(item));
      frag.appendChild(el);
    }
    wrap.appendChild(frag);
  }

  function buildEvents() {
    var anniversaryPicks = [anniversaryItems[3], anniversaryItems[7], anniversaryItems[2], anniversaryItems[6]];
    buildEventStrip(anniversaryItems, "event-photos-1", anniversaryPicks, "Zion Telugu Church first anniversary celebration");
    var specialPicks = [specialItems[4], specialItems[8], specialItems[5], specialItems[7]];
    buildEventStrip(specialItems, "event-photos-2", specialPicks, "Special gospel meeting at Zion Telugu Church");
  }

  function initHeader() {
    var header = document.getElementById("site-header");
    var toggle = document.getElementById("nav-toggle");
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      doc.style.overflow = open ? "hidden" : "";
    });

    header.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        doc.style.overflow = "";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        doc.style.overflow = "";
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        doc.style.overflow = "";
      }
    });
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReduced.matches) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    els.forEach(function (el) {
      if (el.dataset.delay) {
        el.style.setProperty("--d", Number(el.dataset.delay) * 0.14 + "s");
      }
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function initLightbox() {
    var lb = document.getElementById("lightbox");
    var img = document.getElementById("lightbox-img");
    var cap = document.getElementById("lightbox-caption");
    var close = document.getElementById("lightbox-close");
    var prev = document.getElementById("lightbox-prev");
    var next = document.getElementById("lightbox-next");
    var current = null;
    var lastFocused = null;

    function open(group, index) {
      lbStates[group] = index;
      current = group;
      render();
      lb.hidden = false;
      doc.style.overflow = "hidden";
      lastFocused = document.activeElement;
      close.focus();
    }

    function render() {
      var item = lbGroups[current][lbStates[current]];
      img.src = item.src;
      img.alt = item.alt;
      cap.textContent = item.alt;
    }

    function step(dir) {
      var group = lbGroups[current];
      var idx = (lbStates[current] + dir + group.length) % group.length;
      lbStates[current] = idx;
      render();
    }

    function closeLb() {
      lb.hidden = true;
      doc.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    close.addEventListener("click", closeLb);
    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });

    lb.addEventListener("click", function (e) {
      if (e.target === lb) closeLb();
    });

    function trapFocus(e) {
      if (lb.hidden) return;
      if (e.key !== "Tab") return;
      var focusables = lb.querySelectorAll("button");
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
    document.addEventListener("keydown", trapFocus);

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-lb]");
      if (!trigger) return;
      var group = Number(trigger.dataset.lb);
      var index = Number(trigger.dataset.lbi);
      open(group, index);
    });
  }

  function initParallax() {
    if (prefersReduced.matches) return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(max-width:700px)").matches) return;
    var layers = document.querySelectorAll(".parallax");
    var anims = new Set();
    layers.forEach(function (el) {
      if (getComputedStyle(el).animationName !== "none") anims.add(el);
    });
    var visible = new Set();
    layers.forEach(function (el, i) {
      el.dataset.pi = String(i);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
    }, { rootMargin: "14% 0px" });
    layers.forEach(function (el) { io.observe(el); });

    var ticking = false;
    function update() {
      ticking = false;
      var vh = window.innerHeight;
      visible.forEach(function (el) {
        if (anims.has(el)) return;
        var r = el.getBoundingClientRect();
        var shift = (r.top + r.height / 2 - vh / 2) * -0.1;
        el.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0) scale(1.07)";
      });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
  }

  buildGallery();
  buildEvents();
  initHeader();
  initReveal();
  initLightbox();
  initParallax();
})();