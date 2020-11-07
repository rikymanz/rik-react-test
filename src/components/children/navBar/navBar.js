import React from 'react';
import PropTypes from 'prop-types';
import './navBar.css'

const navBar = ({ data , selected }) => (
  <div className="navBar">
    {data.map( row =>(
      <div className={(selected == row.id) ? 'navBar-selected' : ''} onClick={row.func} key={row.id}>
        <div>
          {row.name}
        </div>
      </div>
    ))}
  </div>
);

navBar.propTypes = {
  data: PropTypes.array,
  selected:PropTypes.number
};

export default navBar;