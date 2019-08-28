import { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const TODOS = gql`
  {
    todos {
      id
      body
    }
  }
`;

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
  const [addTodo, { data }] = useMutation(ADD_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: TODOS });
      cache.writeQuery({
        query: TODOS,
        data: { todos: todos.concat([createTodo]) }
      });
    }
  });

  const handleSubmit = event => {
    addTodo({ variables: { body: todoText } });
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
