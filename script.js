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
            console.log('mouse enters');
        });

    navLink.addEventListener('mouseout', 
        () => {
            dropdown.style.opacity = '0';
            console.log('mouse leaves');
        });

    dropdown.addEventListener('mouseout', 
        () => {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            console.log('mouse leaves');
        });
})