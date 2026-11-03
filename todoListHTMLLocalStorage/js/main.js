import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoListeners } from "./dom.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
    renderTodos(todos);
    initTodoListeners(todos);
});
