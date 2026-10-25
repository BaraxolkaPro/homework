// Задача 1.
const person = {
    name: "Владислав",
    age: 19,
};
for (const p in person) {
    console.log(`${p} : ${person[p]}`);
}

// Задача 2.
const obj = {};
const isEmpty = (object) => Object.keys(object).length === 0;
console.log(isEmpty(obj));
// Задача 3.
const task = {
    title: "Написать программу",
    description: "Описание",
    isCompleted: true,
};
const modifications = {
    isCompleted: false,
    number: 40,
};
const cloneAndModify = (object, modifications) => ({
    ...object,
    ...modifications,
});
const secondObj = cloneAndModify(task, modifications);
for (const so in secondObj) {
    console.log(`${so}: `, secondObj[so]);
}

// Задача 4.

const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },
    method2() {
        console.log("Метод 2 вызван");
    },
    property: "Это не метод",
};
const callAllMethods = function (obj) {
    for (const key in obj) {
        if (typeof obj[key] === "function") {
            obj[key]();
        }
    }
};
callAllMethods(myObject);
