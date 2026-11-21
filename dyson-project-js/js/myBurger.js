const burgerButton = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");
const pageBody = document.querySelector(".page__body");
const main = document.querySelector(".main");

export const burgerMenu = () => {
    burgerButton.addEventListener("click", () => {
        if (burgerButton.classList.contains("burger--open")) {
            pageBody.classList.remove("page__body--no-scroll");
            burgerButton.classList.remove("burger--open");
            burgerButton.setAttribute("aria-label", "Открыть меню");
            burgerButton.setAttribute("title", "Открыть меню");
            main.style.pointerEvents = "";
            headerMenu.classList.remove("header__menu--open");
            burgerButton.setAttribute("aria-expanded", false);
        } else {
            pageBody.classList.add("page__body--no-scroll");
            burgerButton.classList.add("burger--open");
            burgerButton.setAttribute("aria-label", "Закрыть меню");
            burgerButton.setAttribute("title", "Закрыть меню");
            main.style.pointerEvents = "none";
            headerMenu.classList.add("header__menu--open");
            burgerButton.setAttribute("aria-expanded", true);
        }
    });
};
