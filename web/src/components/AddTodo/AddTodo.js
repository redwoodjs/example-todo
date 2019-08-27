import { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_TODO = gql`
  mutation CreateTodo($body: String!) {
    createTodo(body: $body) {
      id
      body
    }
  }
`;

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [addTodo, { data }] = useMutation(ADD_TODO);

  const handleSubmit = event => {
    console.log(todoText);
    addTodo({ variables: { body: todoText } });
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
