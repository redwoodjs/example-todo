import React from 'react';
import PropTypes from 'prop-types';
import { Mutation as ApolloMutation } from 'react-apollo';

const Mutation = ({ spec, children }) => {
  return <ApolloMutation {...spec}>{children}</ApolloMutation>;
};

Mutation.propTypes = {
  spec: PropTypes.object,
  children: PropTypes.func.isRequired,
};

export default Mutation;
