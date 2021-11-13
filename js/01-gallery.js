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

    if (!event.target.className === 'gallery-item') {
        return;
    }
    else {
        const instance = basicLightbox.create(`
                <img src="assets/images/image.png" width="800" height="600">
            `)
        instance.show(() => );
 
    }
}
