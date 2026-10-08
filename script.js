document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
            });
        });
    }

    const yearElements = document.querySelectorAll(".year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });

});
