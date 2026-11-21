import Modal from "./modal.js";
import {
    initAllDropdowns,
    initCards,
    mediaQueryForCards,
    currentDisplayProducts,
} from "./filter.js";
import { offersSlider } from "./offers-slider.js";
import { counterProduct, counterSlider } from "./counter.js";
import {
    activatedTag,
    managementTags,
    initTags,
    mediaQueryForTags,
} from "./work-tags.js";
import { addMoreNews, initNews, mediaQueryForNews } from "./news.js";
import {
    addMoreReviews,
    initBtnPhotos,
    initReviews,
    mediaQueryForReviews,
    showAllPhotos,
} from "./reviews.js";
import { burgerMenu } from "./myBurger.js";

try {
    new Modal({
        PAGE_BODY: "page__body",
        PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    });

    initAllDropdowns();
    offersSlider();
    counterProduct();
    counterSlider();
    activatedTag();
    initTags();
    mediaQueryForTags.addEventListener("change", initTags);
    managementTags();
    const productsArray = document.querySelectorAll(".offers__product");
    initCards(productsArray);
    mediaQueryForCards.addEventListener("change", () =>
        initCards(currentDisplayProducts),
    );
    initNews();
    addMoreNews();
    mediaQueryForNews.addEventListener("change", () => initNews());
    initReviews();
    addMoreReviews();
    mediaQueryForReviews.addEventListener("change", () => initReviews());
    initBtnPhotos();
    showAllPhotos();
    burgerMenu();
} catch (error) {
    console.error(error);
}
