import './App.css';
import Buscador from './componentes/Buscador';
import Paginador from './componentes/Paginador';
import { useState } from 'react';
import Loading from './componentes/Loading'
import ListaPeliculas from './componentes/ListaPeliculas';


function App() {
  const [peliculas, setPeliculas] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onBuscar = async  (criterioBusqueda) => {
    setIsLoading(true)
    const {Search: pelis} = await getListadoPeliculas(criterioBusqueda);
    setPeliculas(pelis)
    setIsLoading(false)
  };

  return (
    <div className="App">
      <Buscador onBuscar={onBuscar}/>
      {isLoading && <Loading/>}
      {peliculas && <ListaPeliculas peliculas={peliculas}/>}
      {peliculas && <Paginador/>}

    </div>
  );
}

export default App;
