import React from 'react'
import Header from './Header'


function Layout(props) {
  return (
   <>
   <Header length={props.length} />
   {props.children}
   </>  
  )
}

export default Layout