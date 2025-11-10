document.addEventListener("DOMContentLoaded", () => {
  const linkAnalitics = document.querySelector('a[href*="analitics.html"]');
  const alerta = document.getElementById("alerta-login");
  const fechar = document.getElementById("fechar-alerta");
  if (linkAnalitics) {
    linkAnalitics.addEventListener("click", (e) => {
      e.preventDefault();
      alerta.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  }
  fechar.addEventListener("click", () => {
    alerta.classList.remove("active");
    document.body.classList.remove("no-scroll"); 
  });
  alerta.addEventListener("click", (e) => {
    if (e.target === alerta) {
      alerta.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});
