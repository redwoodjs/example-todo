import { intArg, objectType, queryField, mutationField, stringArg } from 'nexus'

export const Todo = objectType({
  name: 'Todo',
  definition(t) {
    t.int('id')
    t.string('body')
    t.string('status')
  },
})

export const todos = queryField('todos', {
  type: 'Todo',
  list: true,
  nullable: true,
  resolve(_root, _args, { photon }) {
    return photon.todos.findMany()
  },
})

export const todoCreate = mutationField('todoCreate', {
  type: 'Todo',
  args: { body: stringArg({ required: true }) },
  resolve(_root, args, { photon }) {
    return photon.todos.create({ data: { body: args.body } })
  },
})

export const todoCheck = mutationField('todoCheck', {
  type: 'Todo',
  args: {
    id: intArg({ required: true }),
    status: stringArg(),
  },
  resolve(_root, { id, status }, { photon }) {
    return photon.todos.update({
      data: { status },
      where: { id },
    })
  },
})

export const todoRename = mutationField('todoRename', {
  type: 'Todo',
  args: {
    id: intArg({ required: true }),
    body: stringArg(),
  },
  resolve(_root, { id, body }, { photon }) {
    return photon.todos.update({
      data: { body },
      where: { id },
    })
  },
})
