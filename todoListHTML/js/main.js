"use strict";

const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_completed]: false,
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosNew = document.querySelector(".todos");

const createTodoElement = (text) => {
    const todo = document.createElement("li");
    todo.classList.add("todo");
    const todoText = document.createElement("div");
    todoText.classList.add("todo-text");
    todoText.textContent = text;
    const todoActions = document.createElement("div");
    todoActions.classList.add("todo-actions");
    const buttonComplete = document.createElement("button");
    const buttonDelete = document.createElement("button");
    buttonComplete.classList.add("button", "button-complete");
    buttonComplete.textContent = "\u2714";
    buttonDelete.classList.add("button", "button-delete");
    buttonDelete.textContent = "\u2716";
    todo.append(todoText, todoActions);
    todoActions.append(buttonComplete, buttonDelete);

    return todo;
};
const handleCreateTodo = (todos, text) => {
    const todo = createTodoElement(text);
    todosNew.append(todo);
    return createTodo(todos, text);
};
