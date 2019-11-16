import { todos } from 'src/services/todos'

export const schema = `
  type Todo {
    id: Int!
    body: String!
    status: String!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(body: String!): Todo
    updateTodoStatus(id: Int!, status: String!): Todo
    renameTodo(id: Int!, body: String!): Todo
  }
`

export const resolvers = {
  Query: {
    todos: () => {
      return todos.all()
    },
  },
  Mutation: {
    createTodo: (_root, args) => {
      return todos.create(args.body)
    },
    updateTodoStatus: (_root, { id, status }) => {
      return todos.updateStatus(id, status)
    },
    renameTodo: (_root, { id, body }) => {
      return todos.rename(id, body)
    },
  },
}
