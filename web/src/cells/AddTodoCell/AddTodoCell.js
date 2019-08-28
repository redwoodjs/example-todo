import { useMutation } from "@hammerframework/hammer-web";
import api from "src/api";
import AddTodo from "src/components/AddTodo";

const AddTodoCell = () => {
  const [addTodo, { data }] = useMutation(api.todo.ADD_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: api.todo.GET_ALL_TODOS });
      cache.writeQuery({
        query: api.todo.GET_ALL_TODOS,
        data: { todos: todos.concat([createTodo]) }
      });
    }
  });

  const submitTodo = body => {
    addTodo({
      variables: { body },
      optimisticResponse: {
        __typename: "Mutation",
        createTodo: { __typename: "Todo", id: 0, body }
      }
    });
  };

  return <AddTodo submitTodo={submitTodo} />;
};

export default AddTodoCell;
