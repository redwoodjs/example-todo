import path from "path";
import express from "express";
import expressLogging from "express-logging";
import bodyParser from "body-parser";
import qs from "qs";
import args from "args";
import requireDir from "require-dir";

import { getHammerConfig } from "@hammerframework/hammer-api";

const hammerConfig = getHammerConfig();

require("@babel/register")({
  extends: path.join(hammerConfig.baseDir, "api/.babelrc.js"),
  only: [path.join(hammerConfig.baseDir, "api")],
  ignore: ["node_modules"]
});

/**
 * The hammer dev server emulates Netlify and AWS Lambda functions. Specify the path
 * to your functions, we'll import any `.js` files and map the filename to a route,
 * e.g.: `graphql.js` -> `/graphql/`, `hello-world.js` -> `/hello-world/`.
 * The dev server will automatically reload when files are modified.`
 */
args
  .option("port", "", hammerConfig.api.port)
  .option(
    "path",
    "The path to your lambda functions",
    hammerConfig.api.paths.functions
  );
const { port: PORT, path: PATH } = args.parse(process.argv);
const HOSTNAME = `http://localhost:${PORT}`;

const lambdaFunctions = requireDir(PATH, {
  recurse: false,
  extensions: [".js"]
});

console.log("\n\nThe following functions are available:");
console.log(
  Object.keys(lambdaFunctions)
    .map(routeName => `- ${HOSTNAME}/${routeName}/`)
    .join("\n")
);

// Express.js Setup
const app = express();
app.use(
  bodyParser.text({
    type: ["text/*", "application/json", "multipart/form-data"]
  })
);
app.use(bodyParser.raw({ type: "*/*" }));
app.use(expressLogging(console));
const parseBody = rawBody => {
  if (typeof rawBody === "string") {
    return { body: rawBody, isBase64Encoded: false };
  }
  if (rawBody instanceof Buffer) {
    return { body: rawBody.toString("base64"), isBase64Encoded: true };
  }
  return { body: "", isBase64Encoded: false };
};

app.all("/", (req, res) => {
  return res.send(`
    <p>The following functions are available:</p>
    ${Object.keys(lambdaFunctions)
      .map(routeName => `- <a href="/${routeName}">/${routeName}</a>`)
      .join("<br />")}
  `);
});

app.all("/:routeName", (req, res, next) => {
  const { routeName } = req.params;

  const lambdaFunction = lambdaFunctions[routeName];
  if (!lambdaFunction) {
    console.warn(`route ${routeName} not found`);
    return res.sendStatus(404);
  }

  // We _really_ only want to support express js type functions, but until then
  // we have to deal with figuring out who you're trying to target.

  const { handler, SERVERLESS_FUNCTION_TYPE = "aws" } = lambdaFunction;

  if (typeof handler !== "function") {
    console.warn(`"${routeName}" does not export a function named "handler"`);
    return res.sendStatus(500);
  }

  if (SERVERLESS_FUNCTION_TYPE === "aws") {
    const event = {
      httpMethod: req.method,
      headers: req.headers,
      path: req.path,
      queryStringParameters: qs.parse(req.url.split(/\?(.+)/)[1]),
      ...parseBody(req.body) // adds `body` and `isBase64Encoded`
    };

    const handlerCallback = response => (
      error,
      { statusCode, body, headers = {} }
    ) => {
      // TODO: Deal with errors
      if (error) {
        console.log("----------");
        console.log(error);
        console.log("----------");
      }

      Object.keys(headers).forEach(header => {
        response.setHeader(header, headers[header]);
      });
      response.statusCode = statusCode;
      return response.end(body);
    };

    // TODO: Add support for promises.
    handler(
      event,
      {}, // TODO: Support context
      handlerCallback(res)
    );
  } else if (SERVERLESS_FUNCTION_TYPE === "express") {
    handler(req, res, next);
  }
});

app.listen(PORT, () =>
  console.log(`\n\n⚒ hammer-dev-server on ${HOSTNAME}\n\n`)
);
