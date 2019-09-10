import { useQuery, useMutation } from '@hammerframework/hammer-web'
import { TODO_CHECK, TODOS } from 'src/api/todo'
import TodoList from 'src/components/TodoList'

const TodoListCell = () => {
  const [todoCheck] = useMutation(TODO_CHECK)

  const clickCheck = (id, status) => {
    todoCheck({
      variables: { id, status },
      optimisticResponse: {
        __typename: 'Mutation',
        todoCheck: { __typename: 'Todo', id, status: 'loading' },
      },
    })
  }

  const { loading, data } = useQuery(TODOS)
  if (loading) {
    return <div>Loading...</div>
  }
  return <TodoList todos={data.todos} onClickCheck={clickCheck} />
}

export default TodoListCell
