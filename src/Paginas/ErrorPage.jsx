import React from 'react'
import { useRouteError } from 'react-router-dom'



function ErrorPage() {

    const error = useRouteError();
    console.error(error)

  return (
    <div>
        <h1> Error de pagina no encontrada, 404</h1>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage