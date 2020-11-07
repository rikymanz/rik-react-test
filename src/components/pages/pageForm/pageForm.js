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
        <input ref={register} name="nome" />
        <button>Vai!</button>
      </form>
    </div>
  ); // fien rendering
}


export default pageForm;