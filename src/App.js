
import './App.css'
import { Header } from './Header';

// importando o react hook form
import {  useForm } from 'react-hook-form';

// importando bibliotecas para fazer a validação dos campos
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';



// aqui vamos fazer as validações
const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório!"),
  email: z.string().email("Digite um email válido!").nonempty("O campo email é obrigatório!"),
  username: z.string().min(3, "O username deve ter pelo menos 3 caracteres!")
  .max(10, "O username deve ter pelo menos 10 caracteres!")
  .nonempty("O campo username é obrigatório!"),
  // telefone: z.string().nonempty("Telefone é um campo válido!")

  // regex do telefone
  telefone: z.string().refine((value) => /^\d{2} ?\d{9}$/.test(value), {
    message: "Digite um telefone válido no formato DD + 9 números!"
  })
})
function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

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
          {...register("name")}
          id='name'
        />
        {errors.name && <p className='error'>{errors.name.message}</p>}

       
        <input
          type="text"       
          placeholder="Digite seu email..."
          className="input"
          {...register("email")}
          id='email'
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}

        
        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username")}
          id='username'
        />
        {errors.username && <p className='error'>{errors.username.message}</p>}

        <input
          type="text"
          placeholder="Digite seu telefone..."
          className="input"
          {...register("telefone")}
          id='telefone'
        />
        {errors.telefone && <p className='error'>{errors.telefone.message}</p>}

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
