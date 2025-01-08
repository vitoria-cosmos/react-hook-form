
import './App.css'
// importa o nosso componente memorizado
// import { MemorizedHeader } from './Header';
import { Header } from './Header';

import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // queremos renderizar o componente só quando a propeiedade name mudar


  return (
    <div className="container">
      <h1>React</h1>
      {/* <MemorizedHeader name={name}/> */}
      <Header name={name}/>

      <p>Name:</p>
      <input
      placeholder='Digite seu nome...'
      value={name}
      onChange={(e) => setName(e.target.value)}
      
      />

      <p>Email:</p>
      <input
      placeholder='Digite seu email...'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      
      />

    </div>
  )
}

export default App
