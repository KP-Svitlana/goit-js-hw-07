import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", onClickOpenModal);

function onClickOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const image = event.target.dataset.source;
    const modal = basicLightbox.create(
      `
    	<img width="1400" height="900" src="${image}">
    `,
      {
        onShow: () => document.addEventListener("keydown", onEscCloseModal),
        onClose: () => document.removeEventListener("keydown", onEscCloseModal),
      }
    );
    modal.show();

    function onEscCloseModal(e) {
      if (e.key === "Escape") {
        modal.close();
      }
    }
  }
}
