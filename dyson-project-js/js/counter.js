export const pageElement = document.querySelector(".page__body");

export const counterProduct = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const productCard = target.closest(".offers__product");
        if (!productCard) return;

        const productCount = productCard.querySelector(
            ".offers__product-count",
        );
        const minusBtn = productCard.querySelector(".offers__product-minus");
        let currentCount = +productCount.textContent || 1;
        if (target.closest(".offers__product-plus")) {
            currentCount++;
        } else if (target.closest(".offers__product-minus")) {
            currentCount--;
        } else {
            return;
        }
        productCount.textContent = `${currentCount}`;
        minusBtn.disabled = currentCount === 1;
    });
};

let currentCountPage = 1;
export const counterSlider = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const allPage = pageElement.querySelectorAll(".swiper-slide");
        const arrowBtn = target.closest(".offers__arrow-wrapper");
        if (!arrowBtn) return;
        if (target.closest(".offers__slider-button--next")) {
            if (currentCountPage >= allPage.length) {
                currentCountPage = allPage.length;
            } else {
                currentCountPage++;
            }
        } else if (target.closest(".offers__slider-button--prev")) {
            if (currentCountPage <= 1) {
                return;
            } else {
                currentCountPage--;
            }
        } else {
            return;
        }
        const productCountPage = pageElement.querySelector(
            ".offers__products-count",
        );
        productCountPage.textContent = `${currentCountPage} из ${allPage.length}`;
    });
};

export const updateCounterSlider = () => {
    const allPage = document.querySelectorAll(".swiper-slide");
    const productCountPage = document.querySelector(".offers__products-count");
    productCountPage.textContent = `${currentCountPage} из ${allPage.length}`;
};

export const resetCounterSlider = () => {
    currentCountPage = 1;
    updateCounterSlider();
};
