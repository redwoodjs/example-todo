import {
  extendType,
  intArg,
  objectType,
  queryField,
  mutationField,
  stringArg
} from "nexus";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.int("id");
    t.string("body");
    t.string("status");
  }
});

export const todos = queryField("todos", {
  type: "Todo",
  list: true,
  nullable: true,
  resolve(_root, _args, { photon }) {
    return photon.todos.findMany();
  }
});

export const todoCreate = mutationField("todoCreate", {
  type: "Todo",
  args: { body: stringArg({ required: true }) },
  resolve(_root, args, { photon }) {
    return photon.todos.create({ data: { body: args.body } });
  }
});

export const todoUpdate = mutationField("todoUpdate", {
  type: "Todo",
  args: {
    id: intArg({ required: true }),
    body: stringArg(),
    status: stringArg()
  },
  resolve(_root, { id, ...args }, { photon }) {
    return photon.todos.update({
      data: { ...permit(args, ["body", "status"]) },
      where: { id }
    });
  }
});

function permit(obj, keys) {
  return keys
    .map(k => (k in obj ? { [k]: obj[k] } : {}))
    .reduce((res, o) => Object.assign(res, o), {});
}
