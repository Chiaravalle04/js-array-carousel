//Gruppo img
const myImg = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

console.log(myImg);

const carouselElement = document.querySelector('.container');

let visibleImg = 0;

for (let i = 0; i < myImg.length; i++) {

    carouselElement.innerHTML += `<div class="photo">

                                        <img src="${myImg[i]}" alt="">

                                    </div>`;

}

const allPhotos = document.querySelectorAll('.photo');

allPhotos[visibleImg].classList.add('visible');

const next = document.getElementById('right');

const previous = document.getElementById('left');

if (visibleImg == 0) {

    previous.style.display = 'none';

} 

next.addEventListener('click',

    function() {

        console.log('click');

        allPhotos[visibleImg].classList.remove('visible');
        visibleImg = visibleImg + 1;
        allPhotos[visibleImg].classList.add('visible');

        if (visibleImg === allPhotos.length - 1) {

            next.style.display = 'none';

        } 

        previous.style.display = 'block';

    }

);

previous.addEventListener('click',

    function() {

        console.log('click');

        allPhotos[visibleImg].classList.remove('visible');
        visibleImg = visibleImg - 1;
        allPhotos[visibleImg].classList.add('visible');

        if (visibleImg == 0) {

            previous.style.display = 'none';

        } 

        next.style.display = 'block';
    }

);
