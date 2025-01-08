import './header.css';

import { memo } from 'react';

// export function Header({ name }) {
//   console.log('Componente header renderizou!')
  
//   return (
//    <h3 className='header'>Bem-vindo(a) {name}</h3>
//   )
// }

// // memorizar o nosso componente header
// // criamos uma nova instância chamada memorized header, em que ela está memorizando o componente header
// export const MemorizedHeader = memo(Header)

// froma mais enxuta de criar o memo do componente

export const Header = memo(({ name }) => {
  console.log('Componente header renderizou')

  return (
    <h3 className='header'>Bem-vindo {name}</h3>
  )
})