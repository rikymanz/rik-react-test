import React from 'react';
import PropTypes from 'prop-types';
import Row from '../row/row'

const List = ({data}) => (
  data.fulfilled && (
  <div className="List">
    {data.value.map( row =>(
      <Row key={row.id} {...row} />
    ))}
  </div>
));

List.propTypes = {
  data: PropTypes.object
};

export default List;