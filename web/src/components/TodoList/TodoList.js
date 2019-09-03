import TodoItem from "src/components/TodoItem";

const TodoList = props => {
  const list = props.todos.map(todo => <TodoItem {...todo} />);

  return <ul>{list}</ul>;
};

export default TodoList;
