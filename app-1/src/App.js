import "./App.css";
import List from "./List";
import AddTodo from "./AddTodo";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(item) {
    const newTodos = [...todos, item];
    setTodos(newTodos);
    console.log(todos);
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
