let btnOn = document.querySelector(".brands__btn-menu--active");
let imgOn = document.querySelector(".brands__menu-img");
let itemOn = document.querySelectorAll(".brands__item--active");

btnOn.addEventListener("click", function(event) {
    event.preventDefault();

    if (this.textContent === "Подробнее") {
        this.textContent = "Скрыть";
        imgOn.style.transform = "rotate(180deg)";
        for (let i = 0; i < itemOn.length; i++) {
            let element = itemOn[i];
            element.style.display = "block";
        }
    } else {
        this.textContent = "Подробнее";
        imgOn.style.transform = "rotate(180deg)";
        for (let i = 0; i < itemOn.length; i++) {
            let element = itemOn[i];
            element.style.display = "none";
        }
        // imgOn.style.transform = "rotate(180deg)";
    }
});

// const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: "vertical",
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
// });