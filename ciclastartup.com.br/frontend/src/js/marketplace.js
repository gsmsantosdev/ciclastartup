const track = document.querySelector(".mk-track");
const slides = [...document.querySelectorAll(".mk-slide")];
const dots = [...document.querySelectorAll(".mk-dot")];
const btnPrev = document.querySelector(".mk-prev");
const btnNext = document.querySelector(".mk-next");
const banner = document.querySelector(".mk-banner");
let index = 0;
let timer = null;

function goTo(i) {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, di) =>
    d.setAttribute("aria-selected", di === index ? "true" : "false")
  );
}

function next() {
  goTo(index + 1);
}
function prev() {
  goTo(index - 1);
}

function autoStart() {
  stop();
  timer = setInterval(next, 20000);
}

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

dots.forEach((d) =>
  d.addEventListener("click", (e) => goTo(+e.currentTarget.dataset.index))
);
btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
banner.addEventListener("mouseenter", stop);
banner.addEventListener("mouseleave", autoStart);
window.addEventListener("visibilitychange", () =>
  document.hidden ? stop() : autoStart()
);

goTo(0);
autoStart();
