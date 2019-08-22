import path from "path";
import requireDir from "require-dir";
import { queryType, makeSchema } from "nexus";
import { ApolloServer } from "apollo-server-lambda";
import { getHammerConfig } from "@hammerframework/hammer-core";

require("@babel/register")({
  rootMode: "upward",
  ignore: ["node_modules"]
});

export const graphQLServerlessFunction = (context = undefined) => {
  const hammerConfig = getHammerConfig();

  const BaseQueryType = queryType({
    definition(t) {
      t.string("help", {
        resolve() {
          return `Start adding your Nexus schema definitions in ${
            hammerConfig.api.paths.graphql
          }`;
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

  return new ApolloServer({
    schema,
    context
  });
};
