import { resetCounterSlider } from "./counter.js";
export let currentDisplayProducts = Array.from(
    document.querySelectorAll(".offers__product"),
);
export const mediaQueryForCards = window.matchMedia("(min-width: 576px)");
export function initCards(changingArray) {
    currentDisplayProducts = [...changingArray];
    const cardsOnSlide = mediaQueryForCards.matches ? 6 : 4;

    const countSlide = Math.ceil(changingArray.length / cardsOnSlide);
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = "";

    for (let i = 0; i < countSlide; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        const container = document.createElement("div");
        container.classList.add("offers__products-wrapper");
        swiperSlide.append(container);
        swiperWrapper.append(swiperSlide);
    }
    const newAllSlide = document.querySelectorAll(".offers__products-wrapper");

    newAllSlide.forEach((slide, slideIndex) => {
        const startIndex = slideIndex * cardsOnSlide;
        let count = 0;
        changingArray.forEach((product, productIndex) => {
            if (productIndex >= startIndex && count < cardsOnSlide) {
                slide.append(product);
                count++;
            }
        });
    });
    if (window.swiper) {
        window.swiper.slideTo(0, 200);
    }
    resetCounterSlider();
}

function initDropdown(root, defaultValue) {
    const header = root.querySelector(".filter__toggle");
    const valueEl = root.querySelector(".filter__value");
    const items = [...root.querySelectorAll(".filter__item")];
    const check = root.querySelector(".filter__active-icon");
    const initialProducts = Array.from(
        document.querySelectorAll(".offers__product"),
    );
    let currentIndex = 0;

    function productFilter() {
        let changingArray = [...initialProducts];

        switch (valueEl.textContent.trim()) {
            case "Сначала дешёвые":
                changingArray.sort((a, b) => {
                    const priseA = +a
                        .querySelector(".offers__product-new-prise")
                        .textContent.replace(/\D/g, "");
                    const priseB = +b
                        .querySelector(".offers__product-new-prise")
                        .textContent.replace(/\D/g, "");
                    return priseA - priseB;
                });
                break;
            case "Сначала дорогие":
                changingArray.sort((a, b) => {
                    const priseA = +a
                        .querySelector(".offers__product-new-prise")
                        .textContent.replace(/\D/g, "");
                    const priseB = +b
                        .querySelector(".offers__product-new-prise")
                        .textContent.replace(/\D/g, "");
                    return priseB - priseA;
                });
                break;
            case "Новинки":
            case "Высокий рейтинг":
                for (let i = changingArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [changingArray[i], changingArray[j]] = [
                        changingArray[j],
                        changingArray[i],
                    ];
                }
                break;
            case "Сначала популярные":
            default:
                break;
        }
        initCards(changingArray);
    }

    function moveCheckTo(index) {
        const item = items[index];
        if (!item || !check) return;

        // offsetTop пункта — относительно ближайшего positioned-родителя.
        // У нас .filter — position: relative, значит offsetTop li считается от него.
        // Но li лежит внутри ul, а ul может иметь свои отступы.
        // Поэтому берём offsetTop пункта + offsetTop самого ul.
        const list = root.querySelector(".filter__list");
        const top =
            list.offsetTop +
            item.offsetTop +
            (item.offsetHeight - check.offsetHeight) / 2;

        check.style.transform = `translateY(${top}px)`;
    }

    function setSelected(value) {
        const index = items.findIndex((item) => item.dataset.value === value);
        if (index === -1) return;

        items.forEach((item, i) => {
            item.classList.toggle("selected", i === index);
        });

        if (valueEl) {
            valueEl.textContent = items[index].textContent.trim();
        }

        currentIndex = index;

        if (root.classList.contains("filter--open")) {
            moveCheckTo(index);
        }
    }

    header.addEventListener("click", (e) => {
        e.stopPropagation();
        const willOpen = !root.classList.contains("filter--open");
        root.classList.toggle("filter--open");

        if (willOpen) {
            requestAnimationFrame(() => moveCheckTo(currentIndex));
        }
    });

    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            setSelected(item.dataset.value);
            root.classList.remove("filter--open");
            productFilter();
        });
    });

    document.addEventListener("click", () => {
        root.classList.remove("filter--open");
    });

    window.addEventListener("resize", () => {
        if (root.classList.contains("filter--open")) {
            moveCheckTo(currentIndex);
        }
    });

    setSelected(defaultValue);
}

export function initAllDropdowns() {
    const roots = document.querySelectorAll(".filter");

    roots.forEach((root) => {
        const defaultValue =
            root.dataset.default ||
            root.querySelector(".filter__item")?.dataset.value;

        initDropdown(root, defaultValue);
    });
}
