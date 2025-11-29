document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // 1. Mobile nav toggle
  // =========================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("nav-open"); // matches .nav-links.nav-open in CSS
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
  // 3. Album page tabs (My Album)
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
  // 4. Certifications slider (auto + buttons)
  // =========================
  const slides = Array.from(document.querySelectorAll(".cert-slide"));
  const prevBtn = document.getElementById("prevCert");
  const nextBtn = document.getElementById("nextCert");

  if (slides.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    const SLIDE_INTERVAL = 2000; // 2 seconds
    let autoTimer = null;

    function showSlide(index) {
      if (slides.length === 0) return;

      // wrap index
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }

      currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
      });
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoTimer = setInterval(function () {
        showSlide(currentIndex + 1);
      }, SLIDE_INTERVAL);
    }

    function stopAutoSlide() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function goNext() {
      showSlide(currentIndex + 1);
      startAutoSlide(); // reset timer after manual click
    }

    function goPrev() {
      showSlide(currentIndex - 1);
      startAutoSlide(); // reset timer after manual click
    }

    // Initial setup
    showSlide(currentIndex);
    startAutoSlide();

    // Buttons
    nextBtn.addEventListener("click", goNext);
    prevBtn.addEventListener("click", goPrev);

    // Optional: pause autoplay on hover
    const slider = document.querySelector(".cert-slider");
    if (slider) {
      slider.addEventListener("mouseenter", stopAutoSlide);
      slider.addEventListener("mouseleave", startAutoSlide);
    }
  }
});
