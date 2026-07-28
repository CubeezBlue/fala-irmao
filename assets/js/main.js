/* =========================================================
   FALA IRMÃO — interacciones
   ---------------------------------------------------------
   ⚙️  EDITÁ ACÁ TUS DATOS DE CONTACTO:
   - whatsapp: número en formato internacional, sin + ni espacios
     (Argentina Córdoba suele ser 549351XXXXXXX)
   - instagram: usuario sin @
   ========================================================= */
const CONFIG = {
  whatsapp: "5493510000000",      // 👈 reemplazá por tu número real
  instagram: "falairmao_",
  email: "hola@falairmao.com"      // 👈 opcional, reemplazá si tenés
};

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Links dinámicos (IG / WhatsApp) ---- */
  const igURL = `https://instagram.com/${CONFIG.instagram}`;
  document.querySelectorAll("[data-ig]").forEach(a => (a.href = igURL));
  document.querySelectorAll("[data-wa]").forEach(a => {
    const msg = a.dataset.wa || "¡Hola FALA IRMÃO! Vi la web y quiero preguntar por un hallazgo.";
    a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  });

  /* ---- Año en el footer ---- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Menú móvil ---- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.classList.toggle("is-open", open);
    });
    menu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.classList.remove("is-open");
      })
    );
  }

  /* ---- Header con sombra al hacer scroll ---- */
  const header = document.getElementById("header");
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll (con fallback a prueba de fallos) ---- */
  const reveals = document.querySelectorAll(".reveal");
  const showAll = () => reveals.forEach(el => el.classList.add("in"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
    // Si por algún motivo nada se reveló en 1.5s, mostrar todo igual.
    setTimeout(() => {
      if (![...reveals].some(el => el.classList.contains("in"))) showAll();
    }, 1500);
  } else {
    showAll();
  }

  /* ---- Nav activo según sección visible ---- */
  const sections = ["inicio", "nosotros", "prendas", "contacto"].map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll(".nav-link");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${e.target.id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  /* ---- Formulario de contacto → abre WhatsApp ---- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const nombre = form.nombre.value.trim();
      const prenda = form.prenda.value.trim();
      const mensaje = form.mensaje.value.trim();
      let text = `¡Hola FALA IRMÃO! Soy ${nombre || "un/a irmão/ã"}.`;
      if (prenda) text += ` Me interesa: ${prenda}.`;
      if (mensaje) text += ` ${mensaje}`;
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    });
  }
});
