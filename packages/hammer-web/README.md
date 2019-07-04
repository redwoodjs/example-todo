# Hammer-API

## What's inside?

### GraphQL client code

```js
// web/src/pages/about-us.js
import { Query } from "@hammerframework/hammer";
import MyComponent, { queryProps } from "src/components/MyComponent";

const X = () => {
  <Query {...queryProps}>{data => <MyComponent {...data} />}</Query>;
};
```
