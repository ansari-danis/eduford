// ================  LOADER ====================//
let loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

//============== TOGGLE MENU ================//

var navLinks = document.getElementById("navLinks");
function showMenu () {
    navLinks.style.right = "0";
}
function hideMenu () {
    navLinks.style.right = "-200px"
}

// ========================== SCROLL REVEAL ========================//

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    dealy: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });