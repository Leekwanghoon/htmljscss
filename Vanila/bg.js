const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)        //floor 내림 0~2까지 이미지수 3개
    return number;
}


function init() {
    const randomNumber = genRandom();   //0~2
    paintImage(randomNumber) 
}

init();