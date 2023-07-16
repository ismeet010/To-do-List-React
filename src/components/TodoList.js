import React from "react"
import { TodoItem } from "./TodoItem"

export default function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
  {todos.map(todo => {
    if(!todo.completed){
    return (
    <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    )
  }
}
  )}
</ul>
    )
}