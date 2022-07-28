import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItemsMurkup = galleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemsMurkup);

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
  docClose: true,
});
