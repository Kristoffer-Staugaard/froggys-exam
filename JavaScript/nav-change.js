window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var header = document.querySelector("header");

    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});