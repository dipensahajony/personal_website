document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // 1. Mobile nav toggle
  // =========================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      // Use .nav-open – should match your CSS
      navLinks.classList.toggle("nav-open");
    });

    // Optional: close menu when a link is clicked (good for mobile)
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
  // 3. Membership/Cert tabs
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
  // 4. Certificates click-to-view
  // =========================
  const certButtons = document.querySelectorAll("[data-cert-target]");
  const certPanels = document.querySelectorAll("[data-cert-panel]");

  if (certButtons.length > 0 && certPanels.length > 0) {
    certButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-cert-target");

        // Active button
        certButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Corresponding certificate detail
        certPanels.forEach((panel) => {
          if (panel.getAttribute("data-cert-panel") === target) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      });
    });
  }
});
