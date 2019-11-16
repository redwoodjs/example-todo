import styled from 'styled-components'
import TodoItem from 'src/components/TodoItem'
import { useMutation } from '@hammerframework/hammer-web'

import { hql } from 'src/lib/hql'

export const query = gql`
  {
    todos {
      id
      body
      status
    }
  }
`
const UPDATE_TODO_STATUS = hql`
  mutation {
    updateTodoStatus(id: $id, status: $status) {
      id
      status
    }
  }
`

export const Loader = () => <div>Loading...</div>

const TodoList = ({ todos }) => {
  const [updateTodoStatus] = useMutation(UPDATE_TODO_STATUS)

  const handleCheckClick = (id, status) => {
    updateTodoStatus({
      variables: { id, status },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTodoStatus: { __typename: 'Todo', id, status: 'loading' },
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
