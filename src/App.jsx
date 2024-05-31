import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import CompletedTodoCount from "./components/CompletedTodoCount";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      <CompletedTodoCount />
    </div>
  );
}

export default App;