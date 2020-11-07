import React from 'react';
import PropTypes from 'prop-types';
import Row from '../row/row'

const List = ({data}) => {
  // fetching in corso
  if (data.pending) {
    return <div>Caricamento...</div>
  // richiesto respinta . errore
  } else if (data.rejected) {
    return <div>ERRORE</div>
  // Richiesta finita con successo
  } else if (data.fulfilled) {
    return (
      <div className="List">
        {data.value.map( row =>(
          <Row key={row.id} {...row} />
        ))}
      </div>
    )
  } // fine if
}


List.propTypes = {
  data: PropTypes.object
};

export default List;