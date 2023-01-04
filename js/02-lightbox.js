import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const generalUL = document.querySelector(".gallery")
console.log(generalUL)

function creatingPhotos (galleryItems) {
  const photos = galleryItems.map(({original,preview,description}) => {
return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
  }).join("")
  
  
  return photos
  }
 
  
  const casePhotos = creatingPhotos (galleryItems);
  generalUL.insertAdjacentHTML("beforeend",casePhotos)

  const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
   