import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');
const imageList = createGallery(galleryItems);


function createGallery(images) {
    return images.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }
    ).join('');
};

imageGallery.insertAdjacentHTML('afterbegin', imageList);



let ligthBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsPosition: 'botton',
    captionsDelay: '250',

});
