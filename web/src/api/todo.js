import gql from "graphql-tag";

export const GET_ALL_TODOS = gql`
  {
    todos {
      id
      body
      status
    }
  }
`;

export const ADD_TODO = gql`
  mutation CreateTodo($body: String!) {
    createTodo(body: $body) {
      id
      __typename
      body
      status
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $body: String, $status: String) {
    updateTodo(id: $id, body: $body, status: $status) {
      id
      __typename
      body
      status
    }
  }
`;
