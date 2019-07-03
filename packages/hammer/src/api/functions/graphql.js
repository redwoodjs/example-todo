require("@babel/register")({
  // Find babel.config.js up the folder structure.
  rootMode: "upward",
  // Since babel ignores all files outside the cwd, it does not compile sibling packages
  // So rewrite the ignore list to only include node_modules
  ignore: ["node_modules"]
});
import path from "path";
import requireDir from "require-dir";
import { queryType, makeSchema } from "nexus";
import { ApolloServer } from "apollo-server-lambda";

import { getHammerConfig } from "src/core";

const hammerConfig = getHammerConfig();
const GRAPHQL_DIR = path.join(
  hammerConfig.baseDir,
  hammerConfig.api.paths.graphql
);
const OUTPUTS_DIR = path.join(
  hammerConfig.baseDir,
  hammerConfig.api.paths.generated
);
const GRAPHQL_HOWTO = "https://hammerframework.com/";

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

export default ({ context } = {}) => {
  const server = new ApolloServer({
    schema,
    context
  });

  return server.createHandler();
};
