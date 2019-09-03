import { graphQLServerlessFunction } from "@hammerframework/hammer-api";
import { getPhoton } from "src/lib/photon";

const createHandler = async event => {
  const photon = await getPhoton();
  const server = graphQLServerlessFunction({
    photon
  });
  return server.createHandler();
};

export const handler = (event, context, callback) => {
  createHandler(event).then(handler => handler(event, context, callback));
};
