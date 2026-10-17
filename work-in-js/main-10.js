// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)
const FIRST_NAME = "Александр";
const LAST_NAME = "Федоров";
const IS_STUDENT = true;

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.
const AGE = 19;
const CURRENT_YEAR = 2026;
const BIRTH_YEAR = CURRENT_YEAR - AGE;

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].
console.log(
    `Меня зовут ${FIRST_NAME} ${LAST_NAME}, мне ${AGE} лет. Я ученик/ученица курса: ${IS_STUDENT}`,
);

// Задача 4
// Какое значение будет у переменной result?
let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(typeof result);

// Строка
