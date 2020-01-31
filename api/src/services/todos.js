import { PrismaClient } from '@prisma/client'

const photon = new PrismaClient()

export const todos = () => photon.todo.findMany()

export const createTodo = ({ body }) => photon.todo.create({ data: { body } })

export const updateTodoStatus = ({ id, status }) =>
  photon.todo.update({
    data: { status },
    where: { id },
  })

export const renameTodo = ({ id, body }) =>
  photon.todo.update({
    data: { body },
    where: { id },
  })
