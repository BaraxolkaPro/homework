for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

const number = +prompt("Введите число для получения его факториала: ", 5);
let factorial = 1;
if (number > 100) {
    console.log("Введите число поменьше!");
} else {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

board = "";
for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        board += "Б ";
    } else {
        board += "Ч ";
    }
    for (let j = 0; j < 7; j++) {
        if ((i + j) % 2 === 0) {
            board += "Ч ";
        } else {
            board += "Б ";
        }
    }
    board += "\n";
}
console.log(board);
