import React from 'react';

const Pelicula = ({ pelicula }) => {

  return (
    <div>
        <div className='max-w-[12em] rounded overflow-hidden shadow-lg mt-5 mx-3'>
        <img className='max-h-[10em] w-full rounded-t-lg' src='' alt='' />
        <div className='px-6 py-4 h-[13em]'>
            <h5 className='my-[1px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{pelicula ? pelicula.Title: 'Titulo no disponible'}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions.</p>
            <a href="/detalles" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Ver detalle
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    </div>
  )
} 

export default Pelicula;