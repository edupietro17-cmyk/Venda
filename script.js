/* =========================
   SCROLL SUAVE (fallback)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   ANIMAÇÃO AO ROLAR (REVEAL)
========================= */
const revealElements = document.querySelectorAll(
  ".hero, .problem, .solution, .benefits, .offer, .testimonials, .objections, .guarantee, .final-cta"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   MICROINTERAÇÃO BOTÕES
========================= */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.97)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* =========================
   CONTADOR DE URGÊNCIA
========================= */
const urgencyElement = document.querySelector(".urgency");

if (urgencyElement) {
  let minutes = 14;
  let seconds = 59;

  const updateTimer = () => {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      minutes = 0;
      seconds = 0;
    }

    urgencyElement.textContent =
      `⚠️ Oferta expira em ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  };

  setInterval(updateTimer, 1000);
}

/* =========================
   BOTÃO STICKY (MOBILE)
========================= */
const createStickyCTA = () => {
  const stickyBtn = document.createElement("a");

  stickyBtn.href = "#oferta";
  stickyBtn.className = "btn btn-cta sticky-cta";
  stickyBtn.textContent = "Quero emagrecer agora";

  document.body.appendChild(stickyBtn);
};

if (window.innerWidth < 768) {
  createStickyCTA();
}

/* =========================
   SCROLL DETECTION (INTENÇÃO)
========================= */
let scrollTriggered = false;

window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercent > 60 && !scrollTriggered) {
    scrollTriggered = true;

    const ctas = document.querySelectorAll(".btn-cta");
    ctas.forEach(btn => {
      btn.classList.add("highlight");
    });
  }
});