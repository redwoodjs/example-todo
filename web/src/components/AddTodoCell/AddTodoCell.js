import { useMutation } from '@hammerframework/hammer-web'
import AddTodo from 'src/components/AddTodo'

import { query as TODOS } from 'src/components/TodoListCell'

const CREATE_TODO = gql`
  mutation AddTodoCell_CreateTodo($body: String!) {
    createTodo(body: $body) {
      id
      __typename
      body
      status
    }
  }
`
const AddTodoCell = () => {
  const [createTodo] = useMutation(CREATE_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: TODOS })
      cache.writeQuery({
        query: TODOS,
        data: { todos: todos.concat([createTodo]) },
      })
    },
  })

  const submitTodo = (body) => {
    createTodo({
      variables: { body },
      optimisticResponse: {
        __typename: 'Mutation',
        createTodo: { __typename: 'Todo', id: 0, body, status: 'loading' },
      },
    })
  }

  return <AddTodo submitTodo={submitTodo} />
}

export default AddTodoCell
