import React, { useContext } from 'react'
import { myContext } from './ProductContext'
import { Navigations } from './Navigations';
const Contactus = () => {
  const msg = useContext(myContext);
    return (
    <div>
        <Navigations></Navigations>

        <h1 style={{color:"green"}}>Welcome to Contactus page {msg}</h1>
    </div>
  )
}

export default Contactus