import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
  return <TodoList todos={data} />;
};

export default TodoListCell;
