import React from "react";
import { Query } from "@apollo/react-components";

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
export default ({ children, component: Component, ...rest }) => {
  const { query, skeleton, dataToProps } =
    (Component && Component.queryProps) || rest;

  return (
    <Query query={query} {...rest}>
      {({ loading, error, data, refetch }) => {
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

        let cleanData = data;
        if (typeof dataToProps === "function") {
          cleanData = dataToProps(data);
        }
        // children takes precedence
        if (children) {
          return children({ data: cleanData, refetch });
        }

        // if the user does not supply a children function, then just render
        // the component.
        return <Component {...cleanData} refetch={refetch} />;
      }}
    </Query>
  );
};
