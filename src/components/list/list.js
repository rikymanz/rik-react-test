import React from 'react';
import PropTypes from 'prop-types';

const List = ({data}) => (
  <div className="Gists">
    {data.map( row =>(
      <div key={row.id}>
        {row.description}
      </div>
    ))}
  </div>
);

List.propTypes = {
  data: PropTypes.array
};

export default List;