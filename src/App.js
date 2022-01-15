import React from "react";
import { TodoCounter  } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';
const todos = [
  { text: "Cortar cesped", completed: false },
  { text: "tarea 2", completed: false },
  { text: "tarea 3", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
   
      
    </React.Fragment>
  );
}

export default App;
