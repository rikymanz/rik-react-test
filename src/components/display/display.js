import React from 'react';
import PropTypes from 'prop-types';

const Display = ({contatore}) => (
  <div className="Display">
    Figlio : { contatore }
  </div>
);

Display.propTypes = {
  contatore: PropTypes.number
};


export default Display;