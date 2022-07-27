import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItemsMurkup = galleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemsMurkup);

gallery.addEventListener("click", onClickItemGallery);

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onClickItemGallery(evn) {
  evn.preventDefault();

  const isLink = evn.target.classList.contains("gallery__image");
  if (!isLink) {
    return;
  }

  var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionType: "attr",
    captionPosition: "bottom",
    captionDelay: 250,
    captionsData: "alt",
    docClose: true,
  });

  lightbox.on("show.simplelightbox");
}
