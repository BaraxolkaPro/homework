export const getTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosToLocalStorage = (todos) => {
    return localStorage.setItem("todos", JSON.stringify(todos));
};
