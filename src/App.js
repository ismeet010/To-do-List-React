import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react';
import './index.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import CompletedTodo from './components/CompletedTodo';
import Confetti from "./components/Confetti";
import Auth from "./components/Auth";
// import { useTranslation } from "react-i18next";
// import { LANGUAGES } from "./constants/indx";

function App() {
  const [showConf, setShowConf] = useState(false);
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  useEffect(() => {
    console.log("todods modified");
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    console.log(id, completed);
    if (completed) {
      setShowConf(true);
      setTimeout(() => {
        setShowConf(false);
      }, 2000);
    }
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  const name = "Ismeet";
  // const { i18n, t } = useTranslation();

  // const onChangeLang = (e) => {
  //   const lang_code = e.target.value;
  //   // i18n.changeLanguage(lang_code);
  // };
  return (
    <div>
      {/* <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select> */}
      {/* <h1>{t("greeting", { name: name })}</h1> */}
      <Auth />
      <NewTodoForm onSubmit={addTodo} />
      <h1>Total tasks: {todos.length}</h1>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <h1 className="header">Completed tasks</h1>
      <CompletedTodo
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {showConf && <Confetti />}
    </div>
  );
}

export default App;
