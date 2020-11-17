let imgArray = [
    './multimedia/1.jpg',
    './multimedia/2.jpg',
    './multimedia/3.jpg'
];

let img = document.getElementById('slide');
let i = 0;

const slideShow = () => {
    img.src = imgArray[i];
    i = (i < imgArray.length - 1) ? i+1 : 0;
}

const interval = () => {
    setInterval(slideShow,1000);
}

