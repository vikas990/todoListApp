import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Todos from "../../components/Todos/Todos";

const FormContainer = () => {
  // state for handling input
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editIdSelected, setEditIdSelected] = useState("");

  /**
   *
   * @param {*} e is used to prevent the default behavior which to to stop reload when ever we click on submit.
   * @description this function add todo and clear the input field.
   *              - this function also check if the field is empty and if yes the alert the user
   *              - also update the values
   */
  const formSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      return alert("please enter some todo!!");
    } else if (edit) {
      // edit feature
      setTodos(
        todos.map((todo) => {
          if (todo.id === editIdSelected) {
            setEdit(false);
            return { ...todo, text: input };
          }
          setEdit(false);
          return { ...todo };
        })
      );
    } else {
      /**
       * Here we are using Math.random() for unique values.
       * but this not good for production.
       * we can also use a simple npm package called uuid for the unique value.
       */
      setTodos([...todos, { text: input, id: Math.random() * 1000 }]);
    }
    setInput("");
  };

  /**
   * @param {*} id this id is used to identify which element/data needs to be filtered out.
   * @description this function just filter out the data which the user needs to delete.
   */
  const DeleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  /**
   *
   * @param {id} id is used to identify which todo needs to be changed.
   * @param {text} text is used to set the value of the text field.
   * @description this function sets the value of edit to true for checking if we are submitting/editing
   *              sets the text field with the value
   */

  const EditTodo = (id, text) => {
    setEdit(true);
    setInput(text);
    setEditIdSelected(id);
  };

  return (
    <>
      <Form
        input={input}
        setInput={setInput}
        formSubmit={formSubmit}
        edit={edit}
      />
      <Todos
        todos={todos}
        setTodos={setTodos}
        DeleteTodo={DeleteTodo}
        EditTodo={EditTodo}
      />
    </>
  );
};

export default FormContainer;
