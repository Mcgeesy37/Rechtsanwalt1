const revealItems = document.querySelectorAll("[data-reveal]");
const siteHeader = document.getElementById("siteHeader");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));

if (siteHeader) {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 24) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }, { passive: true });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Danke. Ihre Anfrage wurde in der Vorschau erfasst. Auf Wunsch binden wir den Live-Versand als naechsten Schritt an.";
  });
}
