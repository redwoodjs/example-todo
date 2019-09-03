const TodoItem = ({ id, body }) => {
  return (
    <li key={id}>
      {id}: {body}
    </li>
  );
};

export default TodoItem;
