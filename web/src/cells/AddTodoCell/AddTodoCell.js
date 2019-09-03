import { useMutation } from "@hammerframework/hammer-web";
import { ADD_TODO, GET_ALL_TODOS } from "src/api/todo";
import AddTodo from "src/components/AddTodo";

const AddTodoCell = () => {
  const [addTodo, { data }] = useMutation(ADD_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: GET_ALL_TODOS });
      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: { todos: todos.concat([createTodo]) }
      });
    }
  });

  const submitTodo = body => {
    addTodo({
      variables: { body },
      optimisticResponse: {
        __typename: "Mutation",
        createTodo: { __typename: "Todo", id: 0, body, status: "loading" }
      }
    });
  };

  return <AddTodo submitTodo={submitTodo} />;
};

export default AddTodoCell;
