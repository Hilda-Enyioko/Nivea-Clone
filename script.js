// Toggle Dropdown Menu
const navLinks = document.querySelectorAll(".nav-link");
const menuLinks = document.querySelectorAll(".menu-link");
const dropdowns = document.querySelectorAll(".dropdown");

navLinks.forEach((navLink, index) => {
    const dropdown = dropdowns[index];

    navLink.addEventListener('mousemove', 
        () => {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
        });

    navLink.addEventListener('mouseout', 
        () => {
            dropdown.style.opacity = '0';
        });

    dropdown.addEventListener('mouseout', 
        () => {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
        });
})


// Slide Section
const slides = document.querySelectorAll(".slide");
const slideLength = slides.length;
let currentSlide = 0;
const slideButtons = document.querySelectorAll('.slide-button');
const slideButtonLeft = document.querySelector('#slide-button-left');
const slideButtonRight = document.querySelector('#slide-button-right');

function changeSlideForward() {
    slides[currentSlide].classList.remove('slide-active');
    currentSlide = (currentSlide + 1) % slideLength;
    slides[currentSlide].classList.add('slide-active');
}

function changeSlideBackward() {
    slides[currentSlide].classList.remove('slide-active');
    currentSlide = (currentSlide - 1 + slideLength) % slideLength;
    slides[currentSlide].classList.add('slide-active');
}

setInterval(changeSlideForward, 3000);

slideButtonLeft.addEventListener('click', changeSlideBackward);
slideButtonRight.addEventListener('click', changeSlideForward);


