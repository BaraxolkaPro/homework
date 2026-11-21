import { pageElement } from "./counter.js";
const allTag = pageElement.querySelectorAll(".offers__tag-item");
export const mediaQueryForTags = window.matchMedia("(min-width: 992px)");

export const activatedTag = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const clickedTag = target.closest(".offers__tag-item");
        if (!clickedTag) return;
        const isAlreadyActive = clickedTag.classList.contains("active");
        allTag.forEach((tag) => {
            tag.classList.remove("active");
        });
        if (!isAlreadyActive) {
            clickedTag.classList.add("active");
        }
    });
};

export const initTags = () => {
    const visibleTags = mediaQueryForTags.matches ? 4 : 3;
    allTag.forEach((tag, index) => {
        if (index >= visibleTags) {
            tag.classList.add("hidden");
        } else {
            tag.classList.remove("hidden");
        }
    });
};

export const managementTags = () => {
    pageElement.addEventListener("click", ({ target }) => {
        const addBtn = target.closest(".offers__tags-more");
        if (!addBtn) return;
        if (addBtn.textContent.trim() === "Показать еще") {
            allTag.forEach((tag) => {
                tag.classList.remove("hidden");
            });
            addBtn.textContent = "Скрыть";
        } else {
            initTags();
            addBtn.textContent = "Показать еще";
        }
    });
};
