import { Photon } from '@generated/photon'

const photon = new Photon()

export const todos = {
  all: () => {
    return photon.todos.findMany()
  },

  // Create a new todo.
  //
  // body - The String body text.
  //
  // Returns a Todo object.
  create: (body) => {
    return photon.todos.create({ data: { body: body } })
  },

  // Change the status of a todo.
  //
  // id     - The id of the todo.
  // status - The new status. One of 'on', 'off', 'loading'.
  //
  // Returns the updated Todo object.
  changeStatus: (id, status) => {
    return photon.todos.update({
      data: { status },
      where: { id },
    })
  },

  rename: (id, body) => {
    return photon.todos.update({
      data: { body },
      where: { id },
    })
  },
}
