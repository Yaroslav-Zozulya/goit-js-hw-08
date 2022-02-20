// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
//Функция отрисовку галереи
function galleryRender(arrayOfImages) {
  const imagesArr = [];
  galleryItems.map(({ preview, original, description }) => {
    imagesArr.push(`<a class="gallery__item" href="${original}">
                            <img
                                class="gallery__image"
                                src="${preview}" 
                                alt="${description}" 
                            />
                        </a>`);
  });
  galleryRef.insertAdjacentHTML('beforeend', imagesArr.join(''));
}
galleryRender(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 300,
});
