const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  const animateCount = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 2000; // 2s
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString("pt-BR");
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  // Ativa quando o usuário rola até a seção
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});
