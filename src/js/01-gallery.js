// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const itemsMarkup = createListItemsMarkup(galleryItems);

gallery.innerHTML = itemsMarkup;

document.addEventListener('DOMContentLoaded', createNewSimpleLigthBox);

function createNewSimpleLigthBox() {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    navText: ['‹', '›'],
    fadeSpeed: 250,
  });
}

function createListItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
    </li>
    `;
    })
    .join('');
}
