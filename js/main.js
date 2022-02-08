let btnOn = document.querySelector(".brands__btn-menu--active");
let imgOn = document.querySelector(".brands__menu-img");
console.log(imgOn);
let itemOn = document.querySelectorAll(".brands__item--active");

btnOn.addEventListener("click", function(event) {
    event.preventDefault();

    if (this.textContent === "Подробнее") {
        imgOn.classList.add("show-more");
        console.log(imgOn);
        this.textContent = "Скрыть";
        // imgOn.style.transform = "rotate(180deg)";
        for (let i = 0; i < itemOn.length; i++) {
            let element = itemOn[i];
            element.style.display = "block";
        }
    } else {
        imgOn.classList.add("show-more");
        console.log(imgOn);
        this.textContent = "Подробнее";
        // imgOn.style.transform = "rotate(180deg)";
        for (let i = 0; i < itemOn.length; i++) {
            let element = itemOn[i];
            element.style.display = "none";
        }
        // imgOn.style.transform = "rotate(180deg)";
    }
});

const mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");
const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1119px)");
const desktop = window.matchMedia("(min-width: 1120px)");

const swiperStart = function() {
    swiper = new Swiper(".brands__container--swiper", {
        speed: 800,
        spaceBetween: 100,
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            stopOnLastSlide: true,
            disableOnInteraction: false,
        },
    });
};

function swiperMode() {
    if (mobile.matches) {
        swiperStart();
    }
}

window.addEventListener("DOMContentLoaded", swiperMode);
window.addEventListener("resize", swiperMode);