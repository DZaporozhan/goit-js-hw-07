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
  const imgClick = evn.target.dataset.source;

  modalShow(imgClick);
}

let instance;

function modalShow(a) {
  instance = basicLightbox.create(
    `
    <img src="${a}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscModalClose);
      },
      onClose: (instance) => {
        document.addEventListener("keydown", onEscModalClose);
      },
    }
  );

  instance.show();
}

function onEscModalClose(e) {
  e.preventDefault();
  if (e.key === "Escape") {
    instance.close();
  }
}
