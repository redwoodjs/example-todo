# Hammer

This is the main point of interaction for hammer framework users. This exports
both api, and web code.

We do not know if this is a bad idea yet. We could always create `hammer-api`
and `hammer-web` modules, but I wanted to keep the surface area
as small as possible.

What's inside?

- [ ] A graphQL serverless function (configurable via `hammer.toml`)

```js
// api/src/functions/graphql
import { graphQLServerlessFunction } from '@hammerframework/hammer'

module.exports = graphQLServerlessFunction({
    context: () => {
        return {
            photon: /* ... */,
            currentUser: /* ... */,
        },
    },
})
```

- [ ] GraphQL client code

```js
// web/src/pages/about-us.js
import { Query } from "@hammerframework/hammer";
import MyComponent, { queryProps } from "src/components/MyComponent";

const X = () => {
  <Query {...queryProps}>{data => <MyComponent {...data} />}</Query>;
};
```
