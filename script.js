// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
<script>
  document.addEventListener("DOMContentLoaded", function () {
    // ===== Tabs between Memberships & Certifications =====
    const tabButtons = document.querySelectorAll(".mc-tab-button");
    const tabPanels = document.querySelectorAll(".mc-tab-panel");

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-mc-tab");

        // Update active tab button
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

    // ===== Certificate click-to-view logic =====
    const certButtons = document.querySelectorAll("[data-cert-target]");
    const certPanels = document.querySelectorAll("[data-cert-panel]");

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
  });
</script>
