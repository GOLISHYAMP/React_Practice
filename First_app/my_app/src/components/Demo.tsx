//rfc  for functional component
//ccc  for class component
//imr for importing react
//rafce is the best it creates arrow function with default export
import React from 'react'
interface Product
{
    id:number,
    name:string,
    price:number
}
export const Demo = () => {
const products:Product[]=[
    {id:1001,name:"Laptop",price:70000},
    {id:1002,name:"Headphone",price:7000},
    {id:1003,name:"Tablet",price:7000},
    {id:1004,name:"TV",price:50000}];
  return (
    <div>
        <table >
        <th>
            <td>Name</td>
            <td>Price</td>
        </th>
        {products.map(product => (
          <tr key={product.id}>
            {product.name}
             {product.price}
          </tr>
        ))}
      </table>
    </div>
  )
}

 