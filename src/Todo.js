import React from "react";

function Todo({ todo, index, completed, remove }) {
  return (
    <ul className="list-group">
      <li
        className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-start"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <span className="align-items-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              completed(index);
            }}
          >
            completed
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              remove(index);
            }}
          >
            X
          </button>
        </span>
      </li>
    </ul>
  );
}

export default Todo;
