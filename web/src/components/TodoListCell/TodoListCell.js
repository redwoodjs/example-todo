import styled from 'styled-components'
import TodoItem from 'src/components/TodoItem'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query TODOS {
    todos {
      id
      body
      status
    }
  }
`
const UPDATE_TODO_STATUS = gql`
  mutation TodoListCell_CheckTodo($id: Int!, $status: String!) {
    updateTodoStatus(id: $id, status: $status) {
      id
      __typename
      status
    }
  }
`

const UPDATE_TODO_BODY = gql`
  mutation TodoListCell_RenameTodo($id: Int!, $body: String!) {
    renameTodo(id: $id, body: $body) {
      id
      __typename
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div></div>

export const Failure = () => <div>Oh no</div>

export const Success = ({ todos }) => {
  const [updateTodoStatus] = useMutation(UPDATE_TODO_STATUS)
  const [updateTodoBody] = useMutation(UPDATE_TODO_BODY)

  const handleCheckClick = (id, status) => {
    updateTodoStatus({
      variables: { id, status },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTodoBody: { __typename: 'Todo', id, status: 'loading' },
      },
    })
  }

  const handleSaveClick = (id, body) => {
    updateTodoBody({
      variables: { id, body },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTodoBody: { __typename: 'Todo', id, status: 'loading' },
      },
    })
  }

  const list = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      {...todo}
      onClickCheck={handleCheckClick}
      onClickSave={handleSaveClick}
    />
  ))

  return <SC.List>{list}</SC.List>
}

export const beforeQuery = (props) => ({
  variables: props,
})

const SC = {}
SC.List = styled.ul`
  padding: 0;
`
