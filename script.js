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

    dropdown.addEventListener('mouseleave',
        () => {
        dropdown.classList.remove('active');
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



// Slide Section
const slides = document.querySelectorAll(".slide");
const slideLength = slides.length;
let currentSlide = 0;
const slideButtons = document.querySelectorAll('.slide-button');
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
