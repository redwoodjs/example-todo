import styled from "styled-components";

import TodoItem from "src/components/TodoItem";

const TodoList = ({ todos, updateTodo }) => {
  const list = todos.map(todo => (
    <TodoItem key={todo.id} {...todo} updateTodo={updateTodo} />
  ));

  return <SC.List>{list}</SC.List>;
};

const SC = {};
SC.List = styled.ul`
  padding: 0;
`;

export default TodoList;
