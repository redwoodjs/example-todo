import { intArg, objectType, queryField, mutationField, stringArg } from 'nexus'

import { todos } from 'src/services/todos'

export const Todo = objectType({
  name: 'Todo',
  definition(t) {
    t.int('id')
    t.string('body')
    t.string('status')
  },
})

export const todosQuery = queryField('todos', {
  type: 'Todo',
  list: true,
  nullable: true,
  resolve(_root, _args) {
    return todos.all()
  },
})

export const todoCreate = mutationField('todoCreate', {
  type: 'Todo',
  args: { body: stringArg({ required: true }) },
  resolve(_root, args) {
    return todos.create(args.body)
  },
})

export const todoCheck = mutationField('todoCheck', {
  type: 'Todo',
  args: {
    id: intArg({ required: true }),
    status: stringArg(),
  },
  resolve(_root, { id, status }) {
    return todos.changeStatus(id, status)
  },
})

export const todoRename = mutationField('todoRename', {
  type: 'Todo',
  args: {
    id: intArg({ required: true }),
    body: stringArg(),
  },
  resolve(_root, { id, body }) {
    return todos.rename(id, body)
  },
})
