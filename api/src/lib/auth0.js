import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { getHammerBaseDir } from "@hammerframework/hammer-core";

import { user } from "src/services";

dotenv.config({ path: `${getHammerBaseDir()}/.env` });

// TODO: Move this to @hammerframework/hammer-api-auth0
const tokenFromEvent = event => {
  if (typeof event.headers.authorization === "undefined") {
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

export const getCurrentUser = async event => {
  try {
    const token = tokenFromEvent(event);
    const { email } = await userProfileForToken(token);
    return await user.findOrCreate({ email });
  } catch (e) {
    return null;
  }
};
