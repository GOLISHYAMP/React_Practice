import React from 'react'
import { useParams } from 'react-router-dom'
const EditProduct = () => {
    const {id} = useParams();
  return (
    
    <div>EditProduct {id}</div>
  )
}

export default EditProduct