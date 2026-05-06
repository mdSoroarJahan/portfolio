const revealTargets = document.querySelectorAll(
  ".hero-content, .hero-card, .section, .site-footer"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});
