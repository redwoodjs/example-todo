import { useState } from "react";

const AddTodo = ({ submitTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = event => {
    submitTodo(todoText);
    setTodoText("");
    event.preventDefault();
  };

  const handleChange = event => {
    setTodoText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTodo;
