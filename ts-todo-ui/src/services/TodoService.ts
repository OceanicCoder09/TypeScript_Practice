import { Todo } from "../models/Todo";

export class TodoService {
  private todos: Todo[] = [];

  addTodo(title: string): Todo {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date()
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}