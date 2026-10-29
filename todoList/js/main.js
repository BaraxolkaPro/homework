"use strict";

const todoKeys = {
    id: "id",
    text: "text",
    isCompleted: "isCompleted",
    importance: "importance",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text, importance) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.isCompleted]: false,
        [todoKeys.importance]: importance,
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
    todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
    return todo;
};

const filterImportanceTodos = (todos, isMax) => {
    if (isMax) {
        return todos.sort(
            (prev, cur) => cur[todoKeys.importance] - prev[todoKeys.importance],
        );
    } else {
        return todos.sort(
            (prev, cur) => prev[todoKeys.importance] - cur[todoKeys.importance],
        );
    }
};

const setTodoText = (todos, todoId, text) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.text] = text;
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
