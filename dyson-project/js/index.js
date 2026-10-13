import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { initAllDropdowns } from "./filter.js";
import { offersSlider } from "./offers-slider.js";

try {
    new BurgerMenu({
        BURGER: "burger",
        BURGER_OPEN: "burger--open",
        HEADER_MENU: "header__menu",
        HEADER_MENU_OPEN: "header__menu--open",
        lABEL: {
            OPEN: "Открыть меню",
            CLOSE: "Закрыть меню",
        },
        PAGE_BODY: "page__body",
        PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
        MENU_LINK: "header__menu-link",
        BREAKPOINT: 992,
        MAIN: "main",
    });

    new Modal({
        PAGE_BODY: "page__body",
        PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    });

    initAllDropdowns();
    offersSlider();
} catch (error) {
    console.error(error);
}
