import TodoListCell from "src/cells/TodoListCell";
import AddTodoCell from "src/cells/AddTodoCell";

const HomePage = () => {
  return (
    <div>
      <TodoListCell />
      <AddTodoCell />
    </div>
  );
};

export default HomePage;
