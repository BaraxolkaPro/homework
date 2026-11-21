import { pageElement } from "./counter.js";
export const mediaQueryForNews = window.matchMedia("(min-width: 576px)");
const allNews = document.querySelectorAll(".news__article");
let isNewsExpended = false;
export const initNews = () => {
    const visibleNews = mediaQueryForNews.matches ? 3 : 2;
    if (isNewsExpended) {
        allNews.forEach((news, indexNews) => {
            if (indexNews >= visibleNews + visibleNews) {
                news.classList.add("hidden");
            } else {
                news.classList.remove("hidden");
            }
        });
    } else {
        allNews.forEach((news, indexNews) => {
            if (indexNews >= visibleNews) {
                news.classList.add("hidden");
            } else {
                news.classList.remove("hidden");
            }
        });
    }
};

export const addMoreNews = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const visibleNews = mediaQueryForNews.matches ? 3 : 2;
        const showMoreNews = target.closest(".news__more");
        if (!showMoreNews) return;
        if (showMoreNews.textContent.trim() === "Скрыть") {
            allNews.forEach((news, indexNews) => {
                if (indexNews >= visibleNews) {
                    news.classList.add("hidden");
                } else {
                    news.classList.remove("hidden");
                }
            });
            showMoreNews.innerHTML = `Показать еще <svg
            class="news__more-wrapper"
            width="35"
                            height="30"
                        >
                        <use
                                class="news__more-icon"
                                href="./icons/offers-sprite.svg#slider-arrow"
                            ></use>
                            </svg>`;
            const arrowNewsUp = document.querySelector(".news__more-wrapper");
            arrowNewsUp.style.transform = "rotate(-135deg)";
            isNewsExpended = false;
        } else {
            allNews.forEach((news, indexNews) => {
                if (indexNews >= visibleNews + visibleNews) {
                    news.classList.add("hidden");
                } else {
                    news.classList.remove("hidden");
                }
            });
            showMoreNews.innerHTML = `Скрыть <svg
            class="news__more-wrapper"
            width="35"
            height="30"
            >
            <use
            class="news__more-icon"
            href="./icons/offers-sprite.svg#slider-arrow"
            ></use>
            </svg>`;
            const arrowNewsDown = document.querySelector(".news__more-wrapper");
            arrowNewsDown.style.transform = "rotate(45deg)";
            isNewsExpended = true;
        }
    });
};
