// importação de hooks
import { useState, useRef } from 'react'
import './App.css'
import { Header } from './Header';


function App() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [username, setUsername] = useState("")
  // const [description, setDescription] = useState("")
  // const [type, setType] = useState("user")

  // const [input, setInput] = useState('');

  // criando a primeira referencia
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const descriptionRef = useRef(null);
  // const typeRef = useRef('user');

  // function handleSave(e){
  //   e.preventDefault();

  //   console.log({
  //     name,
  //     email,
  //     username,
  //     description,
  //     type,
  //   })
  // }

  // acessar os valores das referencias: 
  function handleSave(e){
    e.preventDefault();

    console.log({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
      description: descriptionRef.current?.value,
      // type: typeRef.current?.valueOf()
      
    })
  }



  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSave}>

        {/* teste */}
        {/* <input
        type='text'
        placeholder='Teste renderização'
        className='input'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        
        /> */}



        {/* <input
          type="text"
          value={name}
          onChange={ (event) => setName(event.target.value) }
          placeholder="Digite seu nome..."
          className="input"
        /> */}

        {/* quando eu coloco useRef, o app não sobre re-rederização */}
        <input
          type="text"
          ref={nameRef}
          placeholder="Digite seu nome..."
          className="input"
        />

        {/* <input
          type="text"
          value={email}
          onChange={ (event) => setEmail(event.target.value) }
          placeholder="Digite seu email..."
          className="input"
        /> */}
        <input
          type="text"
          ref={emailRef}
          placeholder="Digite seu email..."
          className="input"
        />

        {/* <input
          type="text"
          value={username}
          onChange={ (event) => setUsername(event.target.value) }
          placeholder="Digite seu username..."
          className="input"
        /> */}
        <input
          type="text"
          ref={usernameRef}
          placeholder="Digite seu username..."
          className="input"
        />

        {/* <textarea
          type="text"
          value={description}
          onChange={ (event) => setDescription(event.target.value) }
          placeholder="Digite sua descriçao..."
          className="input"
        ></textarea> */}
        <textarea
          type="text"
          ref={descriptionRef}
          placeholder="Digite sua descriçao..."
          className="input"
        ></textarea>


        {/* <select  
          className="select"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select> */}
        {/* <select  
          className="select"
          ref={typeRef}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select> */}


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
