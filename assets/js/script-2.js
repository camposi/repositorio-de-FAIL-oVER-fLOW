// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Menú móvil (básico)
const mobileBtn = document.querySelector(".mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");

if (mobileBtn && mainNav) {
  mobileBtn.addEventListener("click", () => {
    const isHidden = mainNav.style.display === "none" || !mainNav.style.display;

    if (isHidden) {
      mainNav.style.display = "flex";
      mainNav.style.flexDirection = "column";
      mainNav.style.position = "absolute";
      mainNav.style.top = "100%";
      mainNav.style.left = "0";
      mainNav.style.right = "0";
      mainNav.style.background = "#ffffff";
      mainNav.style.borderBottom = "1px solid #e5e7eb";
      mainNav.style.padding = "16px 20px";
      mainNav.style.gap = "12px";
      mainNav.style.zIndex = "40";
    } else {
      mainNav.style.display = "";
      mainNav.style.flexDirection = "";
      mainNav.style.position = "";
      mainNav.style.top = "";
      mainNav.style.left = "";
      mainNav.style.right = "";
      mainNav.style.background = "";
      mainNav.style.borderBottom = "";
      mainNav.style.padding = "";
      mainNav.style.gap = "";
      mainNav.style.zIndex = "";
    }
  });
}

// Envío de la solicitud por correo mediante el cliente de correo del visitante
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const nombre = formData.get("nombre") || "";
    const email = formData.get("email") || "";
    const movil = formData.get("movil") || "";
    const mensaje = formData.get("mensaje") || formData.get("message") || "";

    const asunto = encodeURIComponent("Solicitud de llamada gratuita");
    const cuerpo = encodeURIComponent(
      `Nueva solicitud de llamada gratuita

Nombre: ${nombre}
Email: ${email}
Móvil: ${movil}

Qué le gustaría mejorar: ${mensaje}`
    );

    window.location.href = `mailto:cynthiacaceres60@gmail.com?subject=${asunto}&body=${cuerpo}`;
  });
}
