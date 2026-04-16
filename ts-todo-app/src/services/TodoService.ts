import {Todo} from '../models/Todo';
import {Status} from '../types/common';

export class TodoService {
    private todos : Todo[] = [];
    
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

  getTodos(status: Status = "all"): Todo[] {
    if (status === "completed") {
      return this.todos.filter(t => t.completed);
    }
    if (status === "pending") {
      return this.todos.filter(t => !t.completed);
    }
    return this.todos;
  }

  toggleTodo(id: number): Todo | undefined {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  deleteTodo(id: number): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter(t => t.id !== id);
    return this.todos.length < initialLength;
  }
}