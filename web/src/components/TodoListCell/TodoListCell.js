import styled from 'styled-components'
import TodoItem from 'src/components/TodoItem'
import { useMutation } from '@hammerframework/hammer-web'

const hql = (statement) => {
  let ast = gql(statement)
  ast.definitions[0].name = {
    kind: 'Name',
    value: 'TodoListCell_updateTodoStatus',
  }
  ast.definitions[0].variableDefinitions = [
    {
      kind: 'VariableDefinition',
      variable: {
        kind: 'Variable',
        name: {
          kind: 'Name',
          value: 'id',
        },
      },
      type: {
        kind: 'NonNullType',
        type: {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Int',
          },
        },
      },
      directives: [],
    },
    {
      kind: 'VariableDefinition',
      variable: {
        kind: 'Variable',
        name: {
          kind: 'Name',
          value: 'status',
        },
      },
      type: {
        kind: 'NonNullType',
        type: {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'String',
          },
        },
      },
      directives: [],
    },
  ]
  return ast
}

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
