import { galleryItems } from './gallery-items.js';

console.log(galleryItems)
console.log(cardsPhotosAll(galleryItems))


const generalDiv = document.querySelector(".gallery")


function cardsPhotosAll(galleryItems) {
  
const photosAll =  galleryItems.map(({original,description,preview}) => { 
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
</div> 
`;
}).join(""); 
return photosAll
}

const casePhotos = cardsPhotosAll(galleryItems)
generalDiv.insertAdjacentHTML("beforeend",casePhotos)


// second part

generalDiv.addEventListener("click",clickImage)


 function clickImage (evt) {
 evt.preventDefault ()

  if (evt.target.nodeName !== "IMG") {
    return
  }
  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
// last one

generalDiv.addEventListener("keydown",logPicture)


function logPicture (evt) {
  if (evt.code === "Escape") {
    instance.close()
  }

}
}
 
 




