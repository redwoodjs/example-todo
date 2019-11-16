import styled from 'styled-components'
import TodoItem from 'src/components/TodoItem'
import { useMutation } from '@hammerframework/hammer-web'

const TODOS = gql`
  {
    todos {
      id
      body
      status
    }
  }
`

const TODO_CHECK = gql`
  mutation TodoCheck($id: Int!, $status: String!) {
    todoCheck(id: $id, status: $status) {
      id
      __typename
      status
    }
  }
`

export const query = TODOS

export const Loader = () => <div>Loading...</div>

const TodoList = ({ todos }) => {
  const [todoCheck] = useMutation(TODO_CHECK)

  const handleCheckClick = (id, status) => {
    todoCheck({
      variables: { id, status },
      optimisticResponse: {
        __typename: 'Mutation',
        todoCheck: { __typename: 'Todo', id, status: 'loading' },
      },
    })
  }

  const list = todos.map((todo) => (
    <TodoItem key={todo.id} {...todo} onClickCheck={handleCheckClick} />
  ))

  return <SC.List>{list}</SC.List>
}

const SC = {}
SC.List = styled.ul`
  padding: 0;
`

export default TodoList
