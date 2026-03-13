// ================= ABOUT PAGE JS =================

// Smooth count animation for stats
document.addEventListener("DOMContentLoaded", () => {

  const stats = document.querySelectorAll(".stat-box h3");

  const animateCount = (el) => {
    const target = parseInt(el.innerText);
    let count = 0;
    const speed = target / 40;

    const update = () => {
      count += speed;
      if (count < target) {
        el.innerText = Math.floor(count) + "+";
        requestAnimationFrame(update);
      } else {
        el.innerText = target + "+";
      }
    };

    update();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  stats.forEach(stat => observer.observe(stat));

});
