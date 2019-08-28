import { useQuery } from "@hammerframework/hammer-web";
import api from "src/api";
import TodoList from "src/components/TodoList";

const TodoListCell = () => {
  const { loading, data } = useQuery(api.todo.GET_ALL_TODOS);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <TodoList todos={data.todos} />;
};

export default TodoListCell;
