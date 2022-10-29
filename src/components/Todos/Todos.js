import React from "react";
import Todo from "./Todo/Todo";
import "./Todos.css";

const Todos = ({ todos, DeleteTodo, EditTodo }) => {
  return (
    <div className="todosContainer">
      <ul>
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            id={todo.id}
            DeleteTodo={DeleteTodo}
            EditTodo={EditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
