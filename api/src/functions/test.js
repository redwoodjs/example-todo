// // https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/
// // https://github.com/dougmoscrop/serverless-http

import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

import dotenv from "dotenv";

// hammer base dir.
dotenv.config("../../.env");

// Set up Auth0 configuration
const authConfig = {
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_AUDIENCE
};

// Define middleware that validates incoming bearer tokens
// using JWKS from p4p8.eu.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

export const SERVERLESS_FUNCTION_TYPE = "express";

export const handler = (req, res, next) => {
  checkJwt(req, res, next);

  res.send({
    msg: "Your Access Token was successfully validated!"
  });
};
