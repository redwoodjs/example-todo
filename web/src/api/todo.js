import gql from "graphql-tag";

export const GET_ALL_TODOS = gql`
  {
    todos {
      id
      body
    }
  }
`;

export const ADD_TODO = gql`
  mutation CreateTodo($body: String!) {
    createTodo(body: $body) {
      id
      __typename
      body
    }
  }
`;
