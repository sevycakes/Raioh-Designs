// TOGGLE MENU

const burgir = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    hNav.classList.toggle("open");
});

// HEADER BG

const ulo = document.querySelector(".header");
const taas = document.querySelector(".BackToTop");
window.addEventListener("scroll", () => {
    window.console.log(scrollY);
    if (window.scrollY >= 533) {
        ulo.classList.add("bg");
        taas.classList.add("up");
    } else {
        ulo.classList.remove("bg");
        taas.classList.remove("up");
    }
});