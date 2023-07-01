import React from 'react'
import "./Overlay.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
function Overlay(props) {
    const ClassContainer = props.index === 0 ?'zero' :
    props.index === 1 ?'one' :
     props.index === 2 ? 'two' :
     props.index ===3 ?'three' :
     props.index ===4 ?'four' : 'five'
     const width = 
     props.index === 0 || props.index === 3 ? '100%' : '60%'
     const height = 
     props.index === 0 || props.index === 3 ? `455px` : '220px'
  return (
    <>
    <div className={ClassContainer}>
    <img alt={`${props.title}`} src={`http://localhost:8000/${props.imageUrl}`} style={{borderRadius:"10px"}} width={width} height={height} />
    <div className='overlay'>
      <Link to={`/view/${props.sousCategorie}/${props.category}/${props._id}`}>
        <Button variant='contained' color='warning' className='button'>
        View 
      </Button>
      </Link>
      <p>{props.title}</p>
    </div>
    </div>
    </>
  )
}

export default Overlay