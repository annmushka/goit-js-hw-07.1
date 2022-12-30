import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" " />
          </a>
        </li>

        
    `;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
