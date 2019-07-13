module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      // It is important to note that @babel/preset-env does not support stage-x plugins
      {
        targets: {
          node: true
        },
        useBuiltIns: "usage",
        corejs: 3
      }
    ],
    "@babel/typescript"
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-object-rest-spread"]
  ]
};
