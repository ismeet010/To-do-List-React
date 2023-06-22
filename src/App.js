import { useEffect, useState } from 'react';
import './index.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import CompletedTodo from './components/CompletedTodo';
function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)

  })
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
    
  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
    { id: crypto.randomUUID(), title, completed: false},
  ]
        })
  }

  function toggleTodo(id, completed){
    console.log(id, completed)
    
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id ===id ){
          return{...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id!== id)
    })
  }
  return (
    <>
  <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header">Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  <h1 className="header">Completed tasks</h1>
  <CompletedTodo todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
</>
  );
}

export default App;
