import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigations } from './Navigations';
const EditProduct = () => {
    const {id} = useParams();
  return (
    
    <div>
        <Navigations></Navigations>
      
      <h1>EditProduct {id}</h1>
      </div>
  )
}

export default EditProduct