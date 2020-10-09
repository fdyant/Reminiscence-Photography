const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check NEXT slide
    if(current.nextElementSibling) {
        //add Current to next sibling
        current.nextElementSibling.classList.add('current');
    }else {
        //add Current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check PREVIOUS slide
    if(current.previousElementSibling) {
        //add Current to next sibling
        current.previousElementSibling.classList.add('current');
    }else {
       //add Current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//auto slide
if(auto) {
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
