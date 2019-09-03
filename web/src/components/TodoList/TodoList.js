import styled from "styled-components";

import TodoItem from "src/components/TodoItem";

const TodoList = props => {
  const list = props.todos.map(todo => <TodoItem key={todo.id} {...todo} />);

  return <SC.List>{list}</SC.List>;
};

const SC = {};
SC.List = styled.ul`
  padding: 0;
`;

export default TodoList;
