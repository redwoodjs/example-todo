import path from "path";
import requireDir from "require-dir";
import { queryType, makeSchema } from "nexus";
import { ApolloServer } from "apollo-server-lambda";

import { getHammerConfig } from "src/core";

require("@babel/register")({
  rootMode: "upward",
  ignore: ["node_modules"]
});

export const graphQLServerlessFunction = ({ context = {} } = {}) => {
  const hammerConfig = getHammerConfig();

  const BaseQueryType = queryType({
    definition(t) {
      t.string("help", {
        resolve() {
          return `Start adding your Nexus schema definitions in ${
            hammerConfig.api.paths.graphql
          }, read more over here: "https://hammerframework.com/"`;
        }
      });
    }
  });

  const moreGraphQLTypes = requireDir(hammerConfig.api.paths.graphql, {
    recurse: false
  });

  const schema = makeSchema({
    types: [BaseQueryType, ...Object.values(moreGraphQLTypes)],
    outputs: {
      schema: path.join(hammerConfig.api.paths.generated, "api-schema.graphql"),
      typegen: path.join(
        hammerConfig.api.paths.generated,
        "generated-types.d.ts"
      )
    }
  });

  const server = new ApolloServer({
    schema,
    context
  });

  return server.createHandler();
};
