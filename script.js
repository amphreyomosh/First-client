const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// change the menu to make an x when clicked
document.getElementById("mobile-menu").addEventListener("click", function() {
    this.classList.toggle("change");
});
