// Slide Section
const slides = document.querySelectorAll(".slide");

const slideLength = slides.length;

let currentSlide = 0;

const slideButtonLeft = document.querySelector('#slide-button-left');

const slideButtonRight = document.querySelector('#slide-button-right');

const slideCounters = document.querySelectorAll('.slide-counter');

function changeSlideForward() {
    slides[currentSlide].classList.remove('slide-active');

    slideCounters[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slideLength;

    slides[currentSlide].classList.add('slide-active');

    slideCounters[currentSlide].classList.add('active');
}

function changeSlideBackward() {

    slides[currentSlide].classList.remove('slide-active');

    slideCounters[currentSlide].classList.remove('active');

    currentSlide = (currentSlide - 1 + slideLength) % slideLength;

    slides[currentSlide].classList.add('slide-active');

    slideCounters[currentSlide].classList.add('active');

}

setInterval(changeSlideForward, 3000);

slideButtonLeft.addEventListener('click', changeSlideBackward);

slideButtonRight.addEventListener('click', changeSlideForward);


// Mini-Slide
const miniSlides = document.querySelectorAll('.mini-slide');

const miniSlideLength = miniSlides.length;

const miniCounters = document.querySelectorAll('.mini-counter');

const miniSlideButtonLeft = document.querySelector('#mini-slide-button-left');

const miniSlideButtonRight = document.querySelector('#mini-slide-button-right');

let thisSlide = 0;

function changeMiniSlideForward() {
    miniSlides[thisSlide].classList.remove('active');
    
    miniCounters[thisSlide].classList.remove('active');
    
    thisSlide = (thisSlide + 1) % miniSlideLength;
    
    miniSlides[thisSlide].classList.add('active');
    
    miniCounters[thisSlide].classList.add('active');
}

function changeMiniSlideBackward() {
    miniSlides[thisSlide].classList.remove('active');
    
    miniCounters[thisSlide].classList.remove('active');
    
    thisSlide = (thisSlide - 1) % miniSlideLength;
    
    miniSlides[thisSlide].classList.add('active');
    
    miniCounters[thisSlide].classList.add('active');
}

miniSlideButtonLeft.addEventListener('click', changeMiniSlideBackward);

miniSlideButtonRight.addEventListener('click', changeMiniSlideForward);


//Media Screen Query
//Toggle Menu
const hamburgerMenu = document.querySelector('#hamburger-menu');

const navMenu = document.querySelector('#nav-links');

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});



// Toggle Dropdown Menu
const navLinks = document.querySelectorAll(".nav-link");

const dropdowns = document.querySelectorAll(".dropdown");

navLinks.forEach((navLink, index) => {

    const dropdown = dropdowns[index];

    navLink.addEventListener('mouseenter', 
        () => {
        dropdowns.forEach(d => d.classList.remove('active'));

        dropdown.classList.add('active');
    });

    navLink.addEventListener('mouseleave', 
        () => {
        setTimeout(() => {
            if (!dropdown.matches(':hover')) {
                dropdown.classList.remove('active');
            }
        }, 200);
    });

    dropdown.addEventListener('mouseenter',
        () => {
        dropdown.classList.add('active');
    });

    dropdown.addEventListener('mouseleave',
        () => {
        dropdown.classList.remove('active');
    });
});