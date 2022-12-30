import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGallery(arr) {
const markup = arr.map(({preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
 
}).join('')
return markup;
}; 

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));


galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains('gallery__image');

  if (!isGalleryImageEl) {
    return;
  }

  const src = event.target.dataset.source;

  onModalOpen(src);
}

let instance = null;

function onModalOpen(source) {
  instance = basicLightbox.create(`<img src="${source}">`, {
    onShow: () => document.addEventListener('keydown', onEscKeyBtnPress),
    onClose: () => document.removeEventListener('keydown', onEscKeyBtnPress),
  });
  instance.show();

  
}


function onEscKeyBtnPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
  console.log('hi');
}
