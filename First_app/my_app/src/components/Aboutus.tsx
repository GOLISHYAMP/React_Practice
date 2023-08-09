import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from './ProductContext';

const Aboutus = () => {
    const msg = useContext(myContext);
    const {name}=useParams();
  return (
    <div>
        <h1 style={{color:"green"}}>Welcome {name} to Aboutus page {msg}</h1>
    </div>
  )
}

export default Aboutus