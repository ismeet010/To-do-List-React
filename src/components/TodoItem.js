import React, { useEffect } from "react";

import { useState } from "react";

export function TodoItem({
  todos,
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  const [isVisible, setIsVisible] = useState(completed);

  const setConfetti = () => {
    console.log("here");
    setIsVisible("1");

    console.log(isVisible);
  };
  // useEffect(() => setIsVisible((prevState) => !prevState), []);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
            console.log(e.target.checked);
            setConfetti();
          }}
        />
        {title}
      </label>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
