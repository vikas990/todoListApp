import React from "react";
import "./Todo.css";

const Todo = ({ text, id, DeleteTodo, EditTodo }) => {
  return (
    <div className="todo">
      <li className="text">{text}</li>
      <button className="todo__btn" onClick={() => EditTodo(id, text)}>
        Edit
      </button>
      <button className="todo__btn" onClick={() => DeleteTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
