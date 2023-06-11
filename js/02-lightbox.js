import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
     <a class="gallery__link" href="${original}" >
     <img class="gallery__image" src="${preview}"
     alt="${description}"/></a></li>`;
    })
    .join("");
}
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
