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
    todoCreate(body: String!): Todo
    todoCheck(id: Int!, status: String!): Todo
    todoRename(id: Int!, body: String!): Todo
  }
`

export const resolvers = {
  Query: {
    todos: () => {
      return todos.all()
    },
  },
  Mutation: {
    todoCreate: (_root, args) => {
      return todos.create(args.body)
    },
    todoCheck: (_root, { id, status }) => {
      return todos.changeStatus(id, status)
    },
    todoRename: (_root, { id, body }) => {
      return todos.rename(id, body)
    },
  },
}
