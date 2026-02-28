// Switzerland Trip 2026 — minimal enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links (handled by CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
