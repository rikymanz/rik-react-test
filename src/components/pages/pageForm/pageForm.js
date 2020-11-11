import React from 'react'; 
import {useForm} from 'react-hook-form'
// componenti figli

const pageForm = () => {
  // presi da libreria react-hook-form
  const {register,handleSubmit} = useForm();
  // metodo lanciato dopo il submit del form
  const onSubmit = data => console.log(data)
  // rendering
  return (
    <div className="Pageform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome da inviare</label>
        <input ref={register} name="firstName" />
        <br />
        <label>Cognome</label>
        <input ref={register} name="lastName" />
        {/* Il pulanse avvia il metodo onSubmit. Passa data, oggetto con tutti gli input nome:valore */}
        <button>Vai!</button>
      </form>
    </div>
  ); // fien rendering
}


export default pageForm;