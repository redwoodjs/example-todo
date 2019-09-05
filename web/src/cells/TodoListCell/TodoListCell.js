import { useQuery, useMutation } from "@hammerframework/hammer-web";
import { TODO_UPDATE, TODOS } from "src/api/todo";
import TodoList from "src/components/TodoList";

const TodoListCell = () => {
  const [todoUpdate] = useMutation(TODO_UPDATE);
  const { loading, data } = useQuery(TODOS);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <TodoList todos={data.todos} updateTodo={todoUpdate} />;
};

export default TodoListCell;
