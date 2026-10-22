// Задача 1.

console.log(calculateFinalPrice(100, 10, 0.2));
function calculateFinalPrice(basePrise, discount, tax) {
    const priseDiscount = (basePrise / 100) * discount;
    const priseTax = (basePrise - priseDiscount) * tax;
    return basePrise - priseDiscount + priseTax;
}
// Задача 2.

const checkAccess = function (userName, password) {
    if (userName === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
};
console.log(checkAccess("test", "123456"));
// Задача 3.

const getTimeOfDay = (number) =>
    number < 0 || number > 23
        ? "Некорректное время"
        : number <= 5
          ? "Ночь"
          : number <= 11
            ? "Утро"
            : number <= 17
              ? "День"
              : "Вечер";
console.log(getTimeOfDay(8));
// Задача 4.

const findFirstEven = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) return i;
    }
    return "Чётных чисел нет";
};
console.log(findFirstEven(9, 10));
