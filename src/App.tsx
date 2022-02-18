import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import { useState } from "react";
import Todo from "./Todo";
import { todoArr } from "./Todotypes";

function App() {
 
  const [todos, setTodos] = useState<todoArr[]>([]);

  const completed = (index:number) => {
    const newTodos:todoArr[] = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const remove = (index:number) => {
    const newTodos:todoArr[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = (text:string): void => {
    //console.log("new list", text);
    const newTodos:any= [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container App-header">
        <h1>Todo List</h1>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            completed={completed}
            index={index}
            remove={remove}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
