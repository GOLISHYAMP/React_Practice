import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { newContext } from './ProductContext';

const ProductDetails = () => {
    console.log("hello");
    // const {product_id} = useParams();
    const {id} = useParams();
    // console.log(" etla unnav "+id)
    const products = useContext(newContext);
    console.log(products)
    const pd = products.filter(product => product.id === Number(id))[0]
    console.log(pd)
  return (
    <div>
        <p>
            <h3>Id : {pd.id}</h3><br />
            <h3>Name : {pd.name}</h3><br />
            <h3>Price : {pd.price}</h3>
        </p>
    </div>
  )
}

export default ProductDetails