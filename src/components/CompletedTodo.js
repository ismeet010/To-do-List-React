import React from "react";
import { TodoItem } from "./TodoItem";

export default function CompletedTodo({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </ul>
  );
}
