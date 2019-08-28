import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import AddTodo from "src/components/AddTodo";

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

const AddTodoCell = () => {
  const [addTodo, { data }] = useMutation(ADD_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: TODOS });
      cache.writeQuery({
        query: TODOS,
        data: { todos: todos.concat([createTodo]) }
      });
    }
  });

  const submitTodo = body => {
    addTodo({ variables: { body } });
  };

  return <AddTodo submitTodo={submitTodo} />;
};

export default AddTodoCell;
