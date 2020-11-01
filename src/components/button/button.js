import React from 'react';
import PropTypes from 'prop-types';

const Button = ({func,name}) => (
  <div className="Button">
    <button onClick={func} >
      {name}
    </button>
  </div>
);

Button.propTypes = {
  func: PropTypes.func,
  name:PropTypes.string
};


export default Button;