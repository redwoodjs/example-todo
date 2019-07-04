# Hammer-API

## What's inside?

### A graphQL serverless function

```js
// api/src/functions/graphql
import { graphQLServerlessFunction } from '@hammerframework/hammer'

module.exports = graphQLServerlessFunction({
    context:  {
        photon: /* ... */,
        currentUser: /* ... */,
    },
})
```

### GraphQL client code

```js
// web/src/pages/about-us.js
import { Query } from "@hammerframework/hammer";
import MyComponent, { queryProps } from "src/components/MyComponent";

const X = () => {
  <Query {...queryProps}>{data => <MyComponent {...data} />}</Query>;
};
```
