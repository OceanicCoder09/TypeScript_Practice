import React, { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoService } from "../services/TodoService";
import "./TodoApp.css"; // Import the CSS file below

const service = new TodoService();

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = service.addTodo(input);
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    service.toggleTodo(id);
    setTodos([...service.getTodos()]);
  };

  const deleteTodo = (id: number) => {
    service.deleteTodo(id);
    setTodos([...service.getTodos()]);
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h1>My Tasks</h1>

        <div className="input-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button className="add-btn" onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.length === 0 && <p className="empty-msg">No tasks yet!</p>}
          {todos.map((t) => (
            <li key={t.id} className="todo-item">
              <span
                onClick={() => toggleTodo(t.id)}
                className={`todo-text ${t.completed ? "completed" : ""}`}
              >
                {t.title}
              </span>
              <button className="del-btn" onClick={() => deleteTodo(t.id)}>×</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};