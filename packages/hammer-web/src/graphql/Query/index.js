import React from "react";
import { Query as OriginalQuery } from "urql";

import Skeleton from "./subcomponents/Skeleton";

/**
 * This is a wrapper around Apollo's `Query` component that
 * reduces some boilerplate: error and loading state management.
 *
 * The loading state is supported by `react-content-loader` which
 * renders a skeleton of the component whilst it's loading.
 *
 * NOTE: Right now it's using `urql`, but will probably go back
 * to using Apollo because they've invested a lot into development
 * tools.
 *
 * TODO: Implement default loading response
 * TODO: Implement default error response
 * urql QueryProps: https://formidable.com/open-source/urql/docs/api/#props
 * urql RenderProps: https://formidable.com/open-source/urql/docs/api/#render-props
 */
export default ({ children, ...queryProps }) => {
  const { skeleton } = queryProps;

  return (
    <OriginalQuery {...queryProps}>
      {({ fetching: loading, error, data, executeQuery: refetch }) => {
        if (loading) {
          if (typeof skeleton !== "undefined") {
            return <Skeleton {...skeleton} />;
          }
          return <p>Loading...</p>;
        }

        if (error) {
          return (
            <pre>
              <code>{error}</code>
            </pre>
          );
        }

        return children({ data, refetch });
      }}
    </OriginalQuery>
  );
};
