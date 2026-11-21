import { pageElement } from "./counter.js";
export const mediaQueryForReviews = window.matchMedia("(min-width: 576px)");
const allReviews = document.querySelectorAll(".reviews__item");
let isReviewsExpanded = false;
const maxPhotos = 3;

export const initReviews = () => {
    const visibleReviews = 3;
    const addReviews = mediaQueryForReviews.matches ? 3 : 2;
    if (isReviewsExpanded) {
        allReviews.forEach((reviews, indexReviews) => {
            if (indexReviews >= visibleReviews + addReviews) {
                reviews.classList.add("hidden");
            } else {
                reviews.classList.remove("hidden");
            }
        });
    } else {
        allReviews.forEach((reviews, indexReviews) => {
            if (indexReviews >= visibleReviews) {
                reviews.classList.add("hidden");
            } else {
                reviews.classList.remove("hidden");
            }
        });
    }
};

export const addMoreReviews = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const visibleReviews = 3;
        const addReviews = mediaQueryForReviews.matches ? 3 : 2;
        const showMoreReviews = target.closest(".reviews__more");
        if (!showMoreReviews) return;
        if (showMoreReviews.textContent.trim() === "Скрыть") {
            allReviews.forEach((reviews, indexReviews) => {
                if (indexReviews >= visibleReviews) {
                    reviews.classList.add("hidden");
                } else {
                    reviews.classList.remove("hidden");
                }
            });
            showMoreReviews.innerHTML = `Показать еще <svg
            class="reviews__more-wrapper"
            width="35"
                            height="30"
                        >
                        <use
                                class="reviews__more-icon"
                                href="./icons/offers-sprite.svg#slider-arrow"
                            ></use>
                            </svg>`;
            const arrowReviewsUp = document.querySelector(
                ".reviews__more-wrapper",
            );
            arrowReviewsUp.style.transform = "rotate(-135deg)";
            isReviewsExpanded = false;
        } else {
            allReviews.forEach((reviews, indexReviews) => {
                if (indexReviews >= visibleReviews + addReviews) {
                    reviews.classList.add("hidden");
                } else {
                    reviews.classList.remove("hidden");
                }
            });
            showMoreReviews.innerHTML = `Скрыть <svg
            class="reviews__more-wrapper"
            width="35"
            height="30"
            >
            <use
            class="reviews__more-icon"
            href="./icons/offers-sprite.svg#slider-arrow"
            ></use>
            </svg>`;
            const arrowReviewsDown = document.querySelector(
                ".reviews__more-wrapper",
            );
            arrowReviewsDown.style.transform = "rotate(45deg)";
            isReviewsExpanded = true;
        }
    });
};

export const initBtnPhotos = () => {
    allReviews.forEach((review) => {
        const photos = review.querySelectorAll(".reviews__review-item");
        if (photos.length > maxPhotos) {
            photos.forEach((photo, indexPhoto) => {
                if (indexPhoto >= maxPhotos) {
                    photo.classList.add("hidden");
                } else {
                    photo.classList.remove("hidden");
                }
            });

            const btnContainerOfPage = review.querySelector(
                ".reviews__review-wrapper",
            );
            if (
                btnContainerOfPage &&
                !btnContainerOfPage.querySelector(".reviews__review-button")
            ) {
                const addBtnToPage = document.createElement("button");
                addBtnToPage.classList.add("reviews__review-button");
                addBtnToPage.textContent = "Смотреть все фото";
                btnContainerOfPage.append(addBtnToPage);
            }
        }
    });
};

export const showAllPhotos = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const btn = target.closest(".reviews__review-button");
        if (!btn) return;
        const review = btn.closest(".reviews__item");
        if (!review) return;

        const photos = review.querySelectorAll(".reviews__review-item");

        if (btn.textContent.trim() === "Скрыть") {
            photos.forEach((photo, index) => {
                if (index >= maxPhotos) {
                    photo.classList.add("hidden");
                }
            });
            btn.textContent = "Смотреть все фото";
        } else {
            photos.forEach((photo) => {
                photo.classList.remove("hidden");
            });
            btn.textContent = "Скрыть";
        }
    });
};
