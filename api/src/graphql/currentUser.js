import { extendType, intArg, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("email");
  }
});

export default extendType({
  type: "Query",
  definition: t => {
    t.field("currentUser", {
      type: "User",
      nullable: true,
      resolve(_root, _args, { currentUser }) {
        return currentUser;
      }
    });
  }
});
