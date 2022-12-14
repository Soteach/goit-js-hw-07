import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) =>
        `<div class = "gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
        .join("");
}


const addGalleryMarkup = createGallery(galleryItems);

galleryBox.innerHTML = addGalleryMarkup;

galleryBox.addEventListener("click", onImageClick);

function onImageClick(event) {
    // Забороняємо браузеру відкривати картинку за посиланням
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
// інакше виконуємо ligthbox
    
    const instance = basicLightbox.create(`<div class="modal"><img src="${event.target.dataset.source}" width="800" heigth = "600"></div>`);
    instance.show();

    galleryBox.addEventListener("keydown", (event) => {
    
    if (event.code === "Escape") {
        instance.close();
    }
})
}


