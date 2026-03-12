const menu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});