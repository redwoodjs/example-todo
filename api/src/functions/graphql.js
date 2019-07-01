import path from "path";
import requireDir from "require-dir";
import { queryType, makeSchema } from "nexus";
import { ApolloServer } from "apollo-server-lambda";

const GRAPHQL_DIR = path.join(__dirname, "../graphql/");
const OUTPUTS_DIR = path.join(__dirname, "../../generated/");
const GRAPHQL_HOWTO = "https://example.org/";

const BaseQueryType = queryType({
  definition(t) {
    t.string("help", {
      resolve() {
        return `Start adding your Nexus schema definitions in ${GRAPHQL_DIR}, read more over here: ${GRAPHQL_HOWTO}`;
      }
    });
  }
});
const moreGraphQLTypes = requireDir(GRAPHQL_DIR, {
  recurse: false,
  extensions: [".js"]
});
const schema = makeSchema({
  types: [BaseQueryType, ...Object.values(moreGraphQLTypes)],
  outputs: {
    schema: path.join(OUTPUTS_DIR, "api-schema.graphql"),
    typegen: path.join(OUTPUTS_DIR, "generated-types.d.ts")
  }
});

const server = new ApolloServer({
  schema,
  context: {}
});
export const handler = server.createHandler();
