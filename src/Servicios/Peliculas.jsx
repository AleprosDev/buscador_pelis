/*const OMDB_API = 'https://www.omdbapi.com'
const API_KEY = 'f1bc660c'


async function getListadoPeliculas(criterioBusqueda) {
    try {
    const respuesta = await fetch(`${OMDB_API}?apikey=${API_KEY}&s=${criterioBusqueda}`);
    const peliculas = await respuesta.json();
    return peliculas;
}  catch (error) {
    console.error(error)
}}
*/

import React, { useState, useEffect } from 'react';
import Pelicula from './Pelicula';


const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      const respuesta = await fetch(
        'https://www.omdbapi.com/?s=spiderman&apikey=f1bc660c'
      );
      const peliculas = await respuesta.json();
      setPeliculas(peliculas.Search);
    };

    obtenerPeliculas();
  }, []);

  return (
    <div>
      {peliculas.map((pelicula) => (
        <Pelicula key={pelicula.imdbID} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default Peliculas;

