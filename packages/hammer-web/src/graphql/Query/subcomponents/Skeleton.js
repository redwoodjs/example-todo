/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const Skeleton = ({ height, width, shapes }) => {
  return (
    <ContentLoader
      width={width}
      height={height}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      {React.Children.map(shapes, (shape, index) => {
        const key = `${index}-${Object.keys(shape.props)
          .map(k => shape.props[k])
          .join('-')}`;

        return React.cloneElement(shape, { key });
      })}
    </ContentLoader>
  );
};

Skeleton.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  shapes: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Skeleton;
