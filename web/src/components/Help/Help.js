import React from "react";
import PropTypes from "prop-types";

/**
 * This amazing component does...
 */
const Help = ({ as: Element = "div", ...rest }) => {
  return <Element {...rest} />;
};

Help.propTypes = {};

Help.queryProps = (args = {}) => ({
  query: gql`
    query HelpView {
      help
    }
  `,
  skeleton: undefined,
  ...args
});

export default Help;
