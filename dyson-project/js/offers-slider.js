export const offersSlider = () => {
    new Swiper(".offers__products-swiper", {
        centeredSlides: true,
        allowTouchMove: false,
        loop: false,
        navigation: {
            prevEl: ".offers__slider-button--prev",
            nextEl: ".offers__slider-button--next",
        },
    });
};
