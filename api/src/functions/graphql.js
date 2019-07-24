import { graphQLServerlessFunction } from "@hammerframework/hammer-api";
import { getCurrentUser } from "src/lib/auth0";

const createHandler = async event => {
  const currentUser = await getCurrentUser(event);
  const server = graphQLServerlessFunction({
    currentUser
  });
  return server.createHandler();
};

export const handler = (event, context, callback) => {
  createHandler(event).then(handler => handler(event, context, callback));
};
