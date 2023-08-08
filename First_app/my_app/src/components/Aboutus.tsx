import React from 'react'
import { useParams } from 'react-router-dom'

const Aboutus = () => {
    const {name}=useParams();
  return (
    <div>
        <h1 style={{color:"green"}}>Welcome {name} to Aboutus page</h1>
    </div>
  )
}

export default Aboutus