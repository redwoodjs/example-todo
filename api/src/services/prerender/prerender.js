import { db } from 'src/lib/db'

const extractRouteParams = (objects, filter) =>
  objects.map((o) =>
    Object.keys(o)
      .filter((key) => filter.includes(key))
      .map((key) => ({ key: key, val: o[key] }))
  )

export const todoPrerender = async () =>
  extractRouteParams(await db.todo.findMany(), ['id'])
