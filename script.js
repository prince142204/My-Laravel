// script.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle the 'show' class to open/close the navbar
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});
