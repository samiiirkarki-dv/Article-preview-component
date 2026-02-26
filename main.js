// DOM ELEMENTS

const shareButton = document.getElementById("share-icon");
const medias = document.getElementById("medias");

shareButton.addEventListener("click", ()=> {
    medias.classList.toggle('active');
})