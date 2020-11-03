import React ,{ useState} from 'react';
import { connect } from 'react-refetch';
import './app.css';
// componenti figli
import Button from './../button/button'
import Display from './../display/display'
import List from '../list/list'
// componente HoC
//import withData from '../hoc/withData/withData';

// componente Hoc adattato alla chiamata specifica necessaria
//const ListWithGists = withData( List , 'https://api.github.com/users/gaearon/gists' );
// connect utilizzbile al posto del componente HoC
const connectWithGists = connect(() => ({
  data:'https://api.github.com/users/gaearon/gists'
}))
const ListWithGists = connectWithGists(List)

const App = () => {
  // variabile si stato - ogni volta che viene modificata con setContatore il componente viene renderizzato
  const [contatore, setContatore] = useState(0);
  // creazione funzioni incremento e decremento - facilita la lettura
  const decrementCont = () => setContatore( contatore - 1 );
  const incrementCont = () => setContatore( contatore + 1 );
  // rendering
  return (
    <div className="App">
      {/* Visualizzazione diretta della variabile di stato */}
      <div>Padre: {contatore} </div>
      {/* Visualizzazione conponente figlio - Visualizza lo stesso valore, passato nelle props */}
      <Display contatore={contatore} />
      {/* Pulsanti - funzioni passate come parametro. Poi messe onClick nel componente */}
      <Button func={incrementCont} name={`Increment ${contatore + 1}`} />
      <Button func={decrementCont} name={`Decrement ${contatore - 1}`} />
      {/* Componente List con l'aggiunta dei dati presi dall url */}
      <ListWithGists />
    </div>
  );
}

export default App;
