// Задание 1.
// Дан массив пользователей:
const users = [
    { name: "Alex", age: 24, isAdmin: false },
    { name: "Bob", age: 13, isAdmin: false },
    { name: "John", age: 31, isAdmin: true },
    { name: "Jane", age: 20, isAdmin: false },
];
users.push(
    { name: "Ann", age: 19, isAdmin: false },
    { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
const getUserAverageAge = (use) => {
    let s = 0;
    let count = 0;
    use.forEach((user) => {
        s += user.age;
        count++;
    });
    return s / count;
};
console.log(`Средний возраст: ${getUserAverageAge(users)}`);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
const getAllAdmins = (use) => {
    const admins = [];
    use.forEach((user) => {
        if (user.isAdmin == true) {
            admins.push(user);
        }
    });
    return admins;
};
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
const test = [1, 2, 3, 4, 5, 6];

const first = function (arr, n) {
    if (n === 0) {
        return [];
    } else if (n == undefined) {
        return [arr[0]];
    } else {
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push(arr[i]);
        }
        return result;
    }
};

console.log(first(test, 4));
