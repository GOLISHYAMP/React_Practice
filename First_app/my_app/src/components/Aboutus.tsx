import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from './ProductContext';
import { Navigations } from './Navigations';

const Aboutus = () => {
    const msg = useContext(myContext);
    const {name}=useParams();
  return (
    <div>
        <Navigations></Navigations>

        <h1 style={{color:"green"}}>Welcome {name} to Aboutus page {msg}</h1>
    </div>
  )
}

export default Aboutus