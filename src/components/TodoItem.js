import React from "react"
import Confetti from "./Confetti"
import { useState } from "react";


export function TodoItem({completed, id, title , toggleTodo, deleteTodo}){
  const [isVisible, setIsVisible] = useState(completed);
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              toggleTodo(id, e.target.checked);
              setIsVisible(e.target.checked);
              console.log(e.target.checked)
            }}
          />
          {title}
        </label>
        <button onClick={() => {deleteTodo(id);}} className="btn btn-danger">
          Delete
        </button>
        {isVisible && <Confetti />}

      </li>
    );
}