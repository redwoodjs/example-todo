import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const todos = () => prisma.todo.findMany()

export const createTodo = ({ body }) => prisma.todo.create({ data: { body } })

export const updateTodoStatus = ({ id, status }) =>
  prisma.todo.update({
    data: { status },
    where: { id },
  })

export const renameTodo = ({ id, body }) =>
  prisma.todo.update({
    data: { body },
    where: { id },
  })
