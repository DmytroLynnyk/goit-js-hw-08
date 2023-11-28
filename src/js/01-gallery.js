// Add imports above this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />
             </a>
        </li>`
  )
  .join('');
galleryList.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a');
