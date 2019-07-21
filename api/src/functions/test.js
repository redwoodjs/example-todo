import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import dotenv from "dotenv";
import fetch from "node-fetch";

import { user } from "src/services";

// hammer base dir.
dotenv.config({ path: "../../.env" });

// TODO: Move these into specialized auth0 package.
const tokenFromEvent = event => {
  if (!event.headers.authorization && !event.headers.authorization.length) {
    return undefined;
  }
  return event.headers.authorization.split(" ")[1];
};

const userProfileForToken = async token => {
  const response = await fetch(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(
      `Could not get user profile: ${response.status} ${response.body}`
    );
  }

  const userProfile = await response.json();
  return userProfile;
};

const decodeVerifiedToken = token => {
  return new Promise((resolve, reject) => {
    const { AUTH0_DOMAIN, AUTH0_AUDIENCE, AUTH0_KID } = process.env;
    if (!AUTH0_DOMAIN || !AUTH0_KID || !AUTH0_AUDIENCE) {
      throw new Error(
        "`AUTH0_DOMAIN`, `AUTH0_KID` and `AUTH0_AUDIENCE` env vars are not set"
      );
    }

    const client = jwksClient({
      cache: true,
      rateLimit: true,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    });

    client.getSigningKey(process.env.AUTH0_KID, (keyError, { publicKey }) => {
      if (keyError) {
        return reject(keyError);
      }

      jwt.verify(
        token,
        publicKey,
        {
          algorithms: ["RS256"],
          audience: AUTH0_AUDIENCE,
          issuer: `https://${process.env.AUTH0_DOMAIN}/`
        },
        (verifyError, decoded) => {
          if (verifyError) {
            return reject(verifyError);
          }
          resolve(decoded);
        }
      );
    });
  });
};

export const handler = async event => {
  const token = tokenFromEvent(event);
  const userProfile = await userProfileForToken(token);
  // here we can get the email, and generate an account,
  // or retrieve an account.
  const { email } = userProfile;
  await user.findOrCreate({ email });
  return {
    body: userProfile
  };
};
