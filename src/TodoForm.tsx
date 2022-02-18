import React, { useState, ChangeEvent } from "react";

const TodoForm=({ addTodo}:{addTodo:(text:string)=>void}):JSX.Element=> {
  const [todovalue, setTodovalue] = useState<string>("");

  const handleSubmit = (event:ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todovalue) return;
    addTodo(todovalue);
    setTodovalue("");
  };
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
   setTodovalue(event.target.value);
  };
  return (
    
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="form-control"
          onChange={handleChange}
          value={todovalue}
          type="text"
          placeholder="Enter Todo..."
        ></input>
      </form>
    
  );
}

export default TodoForm;
