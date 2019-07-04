/**
 * This amazing component does...
 */
const Help = ({ as: Element = "div", refetch, ...rest }) => {
  return <Element {...rest} />;
};

Help.propTypes = {};

Help.queryProps = {
  query: gql`
    query HelpView {
      help
    }
  `,
  skeleton: undefined,
  // TODO: This needs a better name.
  // parseData?
  // cleanData?
  dataToProps: data => {
    return { children: data.help };
  }
};

export default Help;
