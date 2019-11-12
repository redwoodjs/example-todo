export const Todo = {
  type: `
    type Todo {
      id: ID!
      body: String!
      status: String!
    }
  `,
}

export const todos = {
  query: `todos: [Todo]`,
  resolver: (_root, _args, { photon }) => {
    return photon.todos.findMany()
  },
}

export const todoCreate = {
  mutation: `todoCreate(body: String!): Todo`,
  resolver: (_root, args, { photon }) => {
    return photon.todos.create({ data: { body: args.body } })
  },
}

export const todoCheck = {
  mutation: `todoCheck(id: ID!, status: String!): Todo`,
  resolver: (_root, { id, status }, { photon }) => {
    return photon.todos.update({
      data: { status },
      where: { id },
    })
  },
}

export const todoRename = {
  mutation: `todoRename(id: ID!, body: String!): Todo`,
  resolver: (_root, { id, body }, { photon }) => {
    return photon.todos.update({
      data: { body },
      where: { id },
    })
  },
}
