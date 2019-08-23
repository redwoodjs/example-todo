import { extendType, intArg, objectType } from "nexus";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.int("id");
    t.string("body");
  }
});

export default extendType({
  type: "Query",
  definition: t => {
    t.list.field("todos", {
      type: "Todo",
      nullable: true,
      resolve(_root, _args, { photon }) {
        // photon.todos.create({ data: { body: "numero uno" } });
        return photon.todos.findMany();
      }
    });
  }
});
