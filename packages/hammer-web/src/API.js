const requireDir = require("webpack-requiredir");
const req = require.context("web/src/api", true, /\.js$/);
console.log(req.keys());
export const api = requireDir(req);
