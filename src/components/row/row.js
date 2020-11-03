import React from 'react';
import PropTypes from 'prop-types';

const Row = ({description}) => (
  <div className="Row">
    {description}
  </div>
);

Row.propTypes = {
  description: PropTypes.string
};

export default Row;