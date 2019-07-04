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
