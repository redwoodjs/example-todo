import { gql, useQuery, useMutation } from "@hammerframework/hammer-web";
import TodoList from "src/components/TodoList";

const TODOS = gql`
  {
    todos {
      id
      body
    }
  }
`;

const TodoListCell = () => {
  const { loading, data } = useQuery(TODOS);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <TodoList todos={data.todos} />;
};

export default TodoListCell;
