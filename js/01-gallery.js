import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
     <a href="${original}" class="gallery__link">
     <img src="${preview}" 
     alt="${description}" 
     data-source="${original}" 
     class="gallery__image"></a></li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", handleGalleryContainerClick);

function handleGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImgEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);
  instance.show();

  if (instance.show) {
    galleryContainer.addEventListener("keydown", handleEscKeyPress);
  } else {
    galleryContainer.removeEventListener("keydown", handleEscKeyPress);
  }

  function handleEscKeyPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
