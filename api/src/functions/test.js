import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import dotenv from "dotenv";

// hammer base dir.
dotenv.config({ path: "../../.env" });

const getUserFromRequest = req => {
  return new Promise((resolve, reject) => {
    const { AUTH0_DOMAIN, AUTH0_AUDIENCE, AUTH0_KID } = process.env;
    if (!AUTH0_DOMAIN || !AUTH0_KID || !AUTH0_AUDIENCE) {
      throw new Error(
        "`AUTH0_DOMAIN`, `AUTH0_KID` and `AUTH0_AUDIENCE` env vars are not set"
      );
    }

    const token = req.get("authorization").split(" ")[1];
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

export const SERVERLESS_FUNCTION_TYPE = "express";

export const handler = async (req, res, next) => {
  try {
    const user = await getUserFromRequest(req);
    console.log(user);
    res.send(JSON.stringify(user));
  } catch (e) {
    console.log(e, "-------");
    res.send(e);
  }
};
