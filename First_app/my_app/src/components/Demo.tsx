//rfc  for functional component
//ccc  for class component
//imr for importing react
//rafce is the best it creates arrow function with default export
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { newContext } from './ProductContext'
import axios from 'axios';
import { Product } from '../utility/Product';
import { Navigations } from './Navigations';


// interface Product
// {
//     id:number,
//     name:string,
//     price:number
// }
export const Demo = () => {


  // const products = useContext(newContext);
  const [products,setproducts] = useState<Product[] | null>();
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response)=>
    {
      setproducts(response.data);
    }).catch(error=>console.log("Got error : "+error));
  }, [])
  
  // const adding:any = useContext(newContext);
  // products.push(adding[0]);
  // console.log(adding);
  // products.push({id:1001,name:"Laptop",price:70000});
  return (
    
    <div>
        <Navigations></Navigations>
      
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {products?.map(product => (
          // <tr key={product.id}>
          <tr>
            <td scope='col'>{product.id}</td>
            <td scope='col'>{product.name}</td>
             <td scope='col'>{product.price}</td>
          </tr>
        ))}
        {/* <tr>
          <td><Link className="nav-link"  to="/edit/:id">Edit</Link></td>
          
        </tr> */}
      </table>
     
    </div>
  )
}

