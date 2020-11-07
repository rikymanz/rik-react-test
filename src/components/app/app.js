import React , {useState} from 'react';
import './app.css';
// componenti figli
import PageCont from '../pages/pageCont/pageCont'
import PageList from '../pages/pageList/pageList'
import NavBar from '../children/navBar/navBar'

const App = () =>{
  // pagina selezionata - alla modifica viene fatto il refresh dell'applicazione
  const [page, setPage] = useState(1);
  /**
   * Arrai di oggetti che gestiscono la navbar
   *  - id: pagina corrispondente impostata in page
   *  - func : funzione chiamata al premere del relativo pulsante
   *  - name : nome nella navbar
   */
  let navBarConf = [
    // pagina 1 - pageCont
    { id:1, func:()=>setPage(1), name:'Contatore' },
    // pagina 2 - PageList
    { id:2, func:()=>setPage(2), name:'Lista con fetch' }
  ];
  
  return(
    <div className="App">
      {/* Barra di navigazione - sempre presente */}
      <NavBar data={navBarConf} selected={page} />
      {/* Pagina contatore */}
      {page == 1 && <PageCont />}
      {/* Componente List con l'aggiunta dei dati presi dall url */}
      {page == 2 && <PageList />}
    </div>
  );
}

export default App;
