document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".menuSwiper", {
        slidesPerView: 2,
        grid: {
            rows: 1,
        },
        spaceBetween: 34,
        navigation: {
            nextEl: '.header__nav-swiper__button--next',
            prevEl: '.header__nav-swiper__button--prev',
        },
        keyboard: true,
        breakpoints: {

            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 7,
            }
        },
    });
});