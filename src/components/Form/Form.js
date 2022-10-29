import "./Form.css";
const Form = ({ input, setInput, formSubmit, edit, editIdSelected }) => {
  return (
    <>
      <form className="todoForm">
        <input
          type="text"
          placeholder="Please enter a List Item"
          className="listInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={formSubmit} type="submit">
          {edit ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
};

export default Form;
