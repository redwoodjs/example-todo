import { getCurrentUser } from "src/lib/auth0";

export const handler = async (event, context, callback) => {
  const user = await getCurrentUser(event);

  return {
    body: {
      user
    }
  };
};
