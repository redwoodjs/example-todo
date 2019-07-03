import { default as graphql } from "src/api/functions/graphql";

export const api = {
  functions: {
    graphql
  }
};

export { getHammerConfigPath, getHammerBaseDir, getHammerConfig } from "./core";
