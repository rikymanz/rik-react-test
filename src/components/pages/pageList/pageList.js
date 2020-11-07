import React from 'react';
import { connect } from 'react-refetch';
// componenti figli
import List from '../../children/list/list'
// componente HoC
//import withData from '../hoc/withData/withData';

// componente Hoc adattato alla chiamata specifica necessaria
//const ListWithGists = withData( List , 'https://api.github.com/users/gaearon/gists' );
// connect utilizzbile al posto del componente HoC
const connectWithGists = connect(() => ({
  data:'https://api.github.com/users/gaearon/gists'
}))
const ListWithGists = connectWithGists(List)

const pageList = () => (
  <div className="PageList">
    {/* Componente List con l'aggiunta dei dati presi dall url */}
    <ListWithGists />
  </div>
);


export default pageList;
