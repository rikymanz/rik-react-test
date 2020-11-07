import React ,{ useState} from 'react'; 
import PropTypes from 'prop-types';
// componenti figli
import Button from '../../children/button/button'
import Display from '../../children/display/display'


const pageCont = () => {
  // variabile si stato - ogni volta che viene modificata con setContatore il componente viene renderizzato
  const [contatore, setContatore] = useState(0);
  // creazione funzioni incremento e decremento - facilita la lettura
  const decrementCont = () => setContatore( contatore - 1 );
  const incrementCont = () => setContatore( contatore + 1 );
  // rendering
  return (
    <div className="PageCont">
      {/* Visualizzazione diretta della variabile di stato */}
      <div>Padre: {contatore} </div>
      {/* Visualizzazione conponente figlio - Visualizza lo stesso valore, passato nelle props */}
      <Display contatore={contatore} />
      {/* Pulsanti - funzioni passate come parametro. Poi messe onClick nel componente */}
      <Button func={incrementCont} name={`Increment ${contatore + 1}`} />
      <Button func={decrementCont} name={`Decrement ${contatore - 1}`} />
    </div>
  );
}

pageCont.propTypes = {
  contatore: PropTypes.number
};

export default pageCont;