import { TodoService } from "./services/TodoService";

import {log, isString} from "./utils/helpers";

const todoService = new TodoService();

const t1 = todoService.addTodo("Learn TypeScript");
const t2 = todoService.addTodo("Build a Todo App");

log(t1);

const unknownValue: unknown = "Hello, TypeScript!";

if(isString(unknownValue)){
    log(unknownValue.toUpperCase());
}

todoService.toggleTodo(t1.id);
todoService.toggleTodo(t2.id);

console.log("All Todos: ", todoService.getTodos());
console.log("Completed Todos: ", todoService.getTodos("completed"));

todoService.deleteTodo(t2.id);
console.log("All Todos after deletion: ", todoService.getTodos());  