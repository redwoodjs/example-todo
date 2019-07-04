/**
 * This amazing component does...
 */
const Help = ({ as: Element = "div", ...rest }) => {
  return <Element {...rest} />;
};

Help.propTypes = {};

Help.queryProps = {
  query: gql`
    query HelpView {
      help
    }
  `,
  skeleton: undefined
};

export default Help;
