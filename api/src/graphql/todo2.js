export const schema = `
  type Todo {
    id: ID!
    body: String!
    status: String!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    todoCreate(body: String!): Todo
    todoCheck(id: ID!, status: String!): Todo
    todoRename(id: ID!, body: String!): Todo
  }
`

export const resolvers = {
  Query: {
    todos: (_root, _args, { photon }) => {
      return photon.todos.findMany()
    },
  },
  Mutation: {
    todoCreate: (_root, args, { photon }) => {
      return photon.todos.create({ data: { body: args.body } })
    },
    todoCheck: (_root, { id, status }, { photon }) => {
      return photon.todos.update({
        data: { status },
        where: { id },
      })
    },
    todoRename: (_root, { id, body }, { photon }) => {
      return photon.todos.update({
        data: { body },
        where: { id },
      })
    },
  },
}
