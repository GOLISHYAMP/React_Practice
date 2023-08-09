import React, { useContext } from 'react'
import { myContext } from './ProductContext'
const Contactus = () => {
  const msg = useContext(myContext);
    return (
    <div>
        <h1 style={{color:"green"}}>Welcome to Contactus page {msg}</h1>
    </div>
  )
}

export default Contactus