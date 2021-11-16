import { galleryItems } from './gallery-items.js';

// Change code below this line
const imageGallery = document.querySelector('.gallery');
const imageList = createGalleryItems(galleryItems);
console.log(galleryItems);


function createGalleryItems(images) {
    return images.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
        </div>`;
    }).join('');
    
    }


imageGallery.insertAdjacentHTML('afterbegin', imageList);

imageGallery.addEventListener('click', getOriginalImage);

function getOriginalImage(event) {
    event.preventDefault();

    if (event.target.classList.value === 'gallery__image') {
        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
        `);

        instance.show();
        
        imageGallery.addEventListener('keydown', readingKey);
    
        function readingKey(event) {
            if (event.code === 'Escape') {
                instance.close();
                imageGallery.removeEventListener('keydown', readingKey);

            }

        }
    }
}
