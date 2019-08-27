import {
  extendType,
  intArg,
  objectType,
  mutationField,
  stringArg
} from "nexus";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.int("id");
    t.string("body");
  }
});

export const Query = extendType({
  type: "Query",
  definition: t => {
    t.list.field("todos", {
      type: "Todo",
      nullable: true,
      resolve(_root, _args, { photon }) {
        return photon.todos.findMany();
      }
    });
  }
});

export const createTodo = mutationField("createTodo", {
  type: "Todo",
  args: { body: stringArg({ required: true }) },
  resolve(_root, args, { photon }) {
    return photon.todos.create({ data: { body: args.body } });
  }
});
