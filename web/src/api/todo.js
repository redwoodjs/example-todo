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

export const TODO_CHECK = gql`
  mutation TodoCheck($id: Int!, $status: String) {
    todoCheck(id: $id, status: $status) {
      id
      __typename
      status
    }
  }
`;

export const TODO_RENAME = gql`
  mutation TodoRename($id: Int!, $body: String) {
    todoRename(id: $id, body: $body) {
      id
      __typename
      body
    }
  }
`;
