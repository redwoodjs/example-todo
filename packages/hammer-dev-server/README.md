# hammer-dev-server

This is the hammer dev server. It looks for "serverless functions" in the
`./api/src/functions` directory and serves them. These serverless functions filenames
are mapped against URIs, eg: `hello-world.js` becomes `https://localhost:8911/hello-word`.

At the moment they emulate the netlify lambda function definition.

```js
export const handler = (event, context, callback) => {
  return callback(null, { status: 200, body: "Hello, world" });
};
```

## TODO

- [ ] use yargs
- [ ] load from config and path normalization
- [ ] create an actual npm binary
- [ ] integrate with hammer-cli
- [ ] improve live reload
