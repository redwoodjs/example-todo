import styled from 'styled-components'
import TodoItem from 'src/components/TodoItem'
import { useQuery, useMutation } from 'urql'

const query = gql`
  {
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
      status
    }
  }
`

//export const Loading = () => <div>Loading...</div>

export default ({ todos }) => {
  const [updateTodoResult, updateTodoStatus] = useMutation(UPDATE_TODO_STATUS)

  const [res] = useQuery({
    query,
  })

  const handleCheckClick = (id, status) => {
    updateTodoStatus(
      { id, status }
      // optimisticResponse: {
      //   __typename: 'Mutation',
      //   updateTodoStatus: { __typename: 'Todo', id, status: 'loading' },
      // },
    )
  }

  if (res.fetching) {
    return 'Loading...'
  }

  const list = res.data.todos.map((todo) => (
    <TodoItem key={todo.id} {...todo} onClickCheck={handleCheckClick} />
  ))

  return <SC.List>{list}</SC.List>
}

// export const beforeQuery = (props) => ({
//   variables: props,
// })

const SC = {}
SC.List = styled.ul`
  padding: 0;
`
