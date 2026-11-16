// Personalize these values when the store's real contact details are available.
const STORE = {
  whatsappNumber: "", // country code + area code + number, digits only
  contactEmail: "",
  address: "",
  openingHours: "",
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("is-open", open);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const directContact = STORE.whatsappNumber
  ? `https://wa.me/${STORE.whatsappNumber}`
  : STORE.contactEmail
    ? `mailto:${STORE.contactEmail}`
    : "";

const contactLink = document.querySelector("#contact-link");
const contactNote = document.querySelector("#contact-note");
const footerContactLink = document.querySelector("#footer-contact-link");

if (directContact) {
  contactLink.href = directContact;
  footerContactLink.href = directContact;
  if (STORE.whatsappNumber) {
    contactLink.target = "_blank";
    contactLink.rel = "noopener noreferrer";
    footerContactLink.target = "_blank";
    footerContactLink.rel = "noopener noreferrer";
  }
  contactNote.textContent = STORE.whatsappNumber
    ? "A conversa abre diretamente no WhatsApp da loja."
    : "A conversa abre no seu aplicativo de e-mail.";
} else {
  contactLink.href = "#cuidados";
  contactLink.innerHTML = 'Conhecer os cuidados <span aria-hidden="true">↓</span>';
  footerContactLink.href = "#cuidados";
  footerContactLink.innerHTML = 'Conhecer os cuidados <span aria-hidden="true">↓</span>';
  contactNote.textContent =
    "Para ativar o contato direto, adicione o WhatsApp ou e-mail da loja no script.js.";
}

document.querySelector(".footer-contact small").textContent =
  [STORE.address, STORE.openingHours].filter(Boolean).join(" · ") ||
  "Endereço e horários: adicione os dados da loja.";
