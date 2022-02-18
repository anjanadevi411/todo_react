import React, { useState, ChangeEvent } from "react";

const TodoForm=({ addTodo}:{addTodo:(text:string)=>void}):JSX.Element=> {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event:ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
   // console.log(value);
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
   // console.log(event.target.value)
    setValue(event.target.value);
  };
  return (
    
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="form-control"
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Enter Todo..."
        ></input>
      </form>
    
  );
}

export default TodoForm;
