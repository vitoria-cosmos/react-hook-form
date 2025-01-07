// importação de hooks
import { useRef } from 'react'
import './App.css'
import { Header } from './Header';

// importando o react hook form
import {  useForm } from 'react-hook-form';


function App() {

  const { register, handleSubmit } = useForm();

  // o register é para a gente registrar cada input que a gente quer manter com o useForm


  // acessar os valores das referencias: 
  function handleSave(data){
    // e.preventDefault();

    // vem um objeto com todos os dados dos campos
    console.log(data);

    // dá o console apenas do nome
    console.log(data.name);
   
  }



  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSubmit(handleSave)}>

        
        {/* quando eu coloco useRef, o app não sobre re-rederização */}
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name", { required: true })}
          id='name'
        />

       
        <input
          type="text"       
          placeholder="Digite seu email..."
          className="input"
          {...register("email", { required: true })}
          id='email'
        />

        
        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username", { required: true, maxLength: 5 })}
          id='username'
        />

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
