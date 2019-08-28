const TodoList = props => {
  const list = props.todos.map(todo => (
    <li key={todo.id}>
      {todo.id}: {todo.body}
    </li>
  ));

  return <ul>{list}</ul>;
};

export default TodoList;
