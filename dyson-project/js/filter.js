function initDropdown(root, defaultValue) {
    const header = root.querySelector(".filter__toggle");
    const valueEl = root.querySelector(".filter__value");
    const items = [...root.querySelectorAll(".filter__item")];
    const check = root.querySelector(".filter__active-icon");

    let currentIndex = 0;

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
