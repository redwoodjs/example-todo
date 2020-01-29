import { Photon } from '@prisma/photon'

const photon = new Photon()

export const todos = () => photon.todos.findMany()

// Create a new todo.
//
// body - The String body text.
//
// Returns a Todo object.
export const createTodo = ({ body }) =>
  photon.todos.create({ data: { body: body } })

// Update the status of a todo.
//
// id     - The id of the todo.
// status - The new status. One of 'on', 'off', 'loading'.
//
// Returns the updated Todo object.
export const updateTodoStatus = ({ id, status }) =>
  photon.todos.update({
    data: { status },
    where: { id },
  })

export const renameTodo = ({ id, body }) =>
  photon.todos.update({
    data: { body },
    where: { id },
  })
