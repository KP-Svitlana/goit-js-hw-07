import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (el) => `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: ["alt"],
  captionPosition: "bottom",
  captionDelay: 250,
});
