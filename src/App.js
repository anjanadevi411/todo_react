import "./App.css";
import TodoForm from "./TodoForm";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const completed = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const remove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    console.log("new list", text);
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
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
