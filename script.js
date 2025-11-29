document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // 1. Mobile nav toggle
  // =========================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      // Use .nav-open – matches styles.css
      navLinks.classList.toggle("nav-open");
    });

    // Close menu when a link is clicked (good for mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
      });
    });
  }

  // =========================
  // 2. Dynamic footer year
  // =========================
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // =========================
  // 3. Membership (tabs layout, if used)
  // =========================
  const tabButtons = document.querySelectorAll(".mc-tab-button");
  const tabPanels = document.querySelectorAll(".mc-tab-panel");

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-mc-tab");

        // Active tab button
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Show corresponding panel
        tabPanels.forEach((panel) => {
          if (panel.getAttribute("data-mc-panel") === target) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      });
    });
  }

  // =========================
  // 4. Album page tabs (My Album)
  // =========================
  const albumTabs = document.querySelectorAll(".album-tab");
  const albumPanels = document.querySelectorAll(".album-panel");

  if (albumTabs.length > 0 && albumPanels.length > 0) {
    albumTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
        const targetPanel = document.getElementById("tab-" + target);

        // Update active tab button
        albumTabs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Show corresponding panel
        albumPanels.forEach((panel) => {
          panel.classList.remove("active");
        });
        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      });
    });
  }

  // =========================
  // 5. Certifications slider
  // =========================
  const certSlides = Array.from(document.querySelectorAll(".cert-slide"));
  const prevCertBtn = document.getElementById("prevCert");
  const nextCertBtn = document.getElementById("nextCert");

  if (certSlides.length > 0 && prevCertBtn && nextCertBtn) {
    let certIndex = 0;
    const SLIDE_INTERVAL = 2000; // 2 seconds
    let certTimer = null;

    function showCertSlide(index) {
      if (certSlides.length === 0) return;

      // Wrap around
      if (index < 0) {
        index = certSlides.length - 1;
      } else if (index >= certSlides.length) {
        index = 0;
      }

      certIndex = index;

      certSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === certIndex);
      });
    }

    function startCertAuto() {
      stopCertAuto();
      certTimer = setInterval(() => {
        showCertSlide(certIndex + 1);
      }, SLIDE_INTERVAL);
    }

    function stopCertAuto() {
      if (certTimer) {
        clearInterval(certTimer);
        certTimer = null;
      }
    }

    function goNextCert() {
      showCertSlide(certIndex + 1);
      startCertAuto(); // reset timer on manual click
    }

    function goPrevCert() {
      showCertSlide(certIndex - 1);
      startCertAuto(); // reset timer on manual click
    }

    // Initial setup
    showCertSlide(certIndex);
    startCertAuto();

    // Button events
    nextCertBtn.addEventListener("click", goNextCert);
    prevCertBtn.addEventListener("click", goPrevCert);

    // (Optional) pause on hover
    const slider = document.querySelector(".cert-slider");
    if (slider) {
      slider.addEventListener("mouseenter", stopCertAuto);
      slider.addEventListener("mouseleave", startCertAuto);
    }
  }
});
