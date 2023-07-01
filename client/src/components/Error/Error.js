import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    let message = 'Could not find ressource or page'
    let title = 'Not Founded'
    if(error.status === 404){
        message=error.data.data.message
        title=error.data.data.title
    }
  return (

    <>
    <h1>{title}</h1>
    <p>{message}</p>
    </>
  )
}

export default Error