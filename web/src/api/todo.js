import gql from "graphql-tag";

export const TODOS = gql`
  {
    todos {
      id
      body
      status
    }
  }
`;

export const TODO_CREATE = gql`
  mutation TodoCreate($body: String!) {
    todoCreate(body: $body) {
      id
      __typename
      body
      status
    }
  }
`;

export const TODO_UPDATE = gql`
  mutation TodoUpdate($id: Int!, $body: String, $status: String) {
    todoUpdate(id: $id, body: $body, status: $status) {
      id
      __typename
      body
      status
    }
  }
`;
