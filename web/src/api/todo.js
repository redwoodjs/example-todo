import gql from "graphql-tag";

const todo = {
  GET_ALL_TODOS: gql`
    {
      todos {
        id
        body
      }
    }
  `,
  ADD_TODO: gql`
    mutation CreateTodo($body: String!) {
      createTodo(body: $body) {
        id
        __typename
        body
      }
    }
  `
};

export default todo;
