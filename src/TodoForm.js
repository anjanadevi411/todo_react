import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="form-control"
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Enter Todo..."
        ></input>
      </form>
    </div>
  );
}

export default TodoForm;
