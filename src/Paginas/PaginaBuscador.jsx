import React from 'react'
import Buscador from '../componentes/Buscador'


function PaginaBuscador() {
  const onBuscar = () => {
    console.log(onBuscar)
  };

  return (
    <div>
        <Buscador onBuscar={onBuscar}/>
    </div>
  )
}

export default PaginaBuscador