import { useMutation } from '@redwoodjs/web'
import AddTodoControl from 'src/components/AddTodoControl'
import { QUERY as TODOS } from 'src/components/TodoListCell'

const CREATE_TODO = gql`
  mutation AddTodo_CreateTodo($body: String!) {
    createTodo(body: $body) {
      id
      body
      status
    }
  }
`

const AddTodo = () => {
  const [createTodo] = useMutation(CREATE_TODO, {
    /**
     * An example of updating Apollo Client's cache after a mutation.
     *
     * Although the new todo itself is cached automatically,
     * it's not automatically added to the list field (TODOS) that it should be referenced in.
     *
     * @see {@link https://www.apollographql.com/docs/react/data/mutations/#updating-the-cache-directly}
     *
     * Here we're using Apollo Client v3.5's new `updateQuery` API to do so in a streamlined way.
     *
     * @see {@link https://www.apollographql.com/docs/react/caching/cache-interaction/#combining-reads-and-writes}
     */
    update(cache, { data: { createTodo } }) {
      cache.updateQuery({ query: TODOS }, (data) => ({
        todos: [...data.todos, createTodo],
      }))
    },
  })

  const submitTodo = (body) => {
    createTodo({
      variables: { body },
      /**
       * We know what the result of our mutation will probably look like.
       * Using `optimisticResponse`, we can update the UI "optimistically".
       *
       * @see {@link https://www.apollographql.com/docs/react/performance/optimistic-ui/}
       *
       * The id we provide is a dummy value.
       *
       * @see {@link https://www.apollographql.com/docs/react/performance/optimistic-ui/#example-adding-a-new-object-to-a-list}
       */
      optimisticResponse: {
        createTodo: {
          id: 'temp',
          __typename: 'Todo',
          body,
          status: 'loading',
        },
      },
    })
  }

  return <AddTodoControl submitTodo={submitTodo} />
}

export default AddTodo
