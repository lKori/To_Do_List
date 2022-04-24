const body = document.querySelector("body");

const backgroundImages = ["backgroundImg_01.jpg", "backgroundImg_02.jpg", "backgroundImg_03.jpg"];

function randomImages() {
    const bgImage = document.createElement("img");
    const imageNum = Math.floor(Math.random() * backgroundImages.length);

    bgImage.src = `../img/${backgroundImages[imageNum]}`;

    body.appendChild(bgImage);
}

randomImages();
