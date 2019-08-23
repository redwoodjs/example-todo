import { graphQLServerlessFunction } from "@hammerframework/hammer-api";
import { getCurrentUser } from "src/lib/auth0";
import { getPhoton } from "src/lib/photon";

const createHandler = async event => {
  const currentUser = await getCurrentUser(event);
  const photon = await getPhoton();
  const server = graphQLServerlessFunction({
    currentUser,
    photon
  });
  return server.createHandler();
};

export const handler = (event, context, callback) => {
  createHandler(event).then(handler => handler(event, context, callback));
};
