const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const galleryButtons = document.querySelectorAll("[data-gallery]");
const modal = document.querySelector(".modal");
const modalImage = modal.querySelector("img");
const modalCaption = modal.querySelector("p");
const modalClose = document.querySelector(".modal-close");
const privacyOpen = document.querySelector(".privacy-link");
const privacyModal = document.querySelector(".privacy-modal");
const privacyClose = document.querySelector(".privacy-close");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

function closeGallery() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  modalImage.alt = "";
  modalCaption.textContent = "";
}

function closePrivacy() {
  privacyModal.classList.remove("is-open");
  privacyModal.setAttribute("aria-hidden", "true");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setMenu(false);
  }
});

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.gallery;
    modalImage.alt = button.querySelector("img").alt;
    modalCaption.textContent = button.dataset.caption;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalClose.addEventListener("click", closeGallery);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeGallery();
  }
});

privacyOpen.addEventListener("click", () => {
  privacyModal.classList.add("is-open");
  privacyModal.setAttribute("aria-hidden", "false");
});

privacyClose.addEventListener("click", closePrivacy);
privacyModal.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    closePrivacy();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGallery();
    closePrivacy();
    setMenu(false);
  }
});
