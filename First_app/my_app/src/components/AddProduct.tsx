import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Product } from '../utility/Product';
import { newContext } from './ProductContext';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const {register, handleSubmit, formState : {errors}} = useForm();
    const products = useContext(newContext);
    const navigate = useNavigate();

    const handleFormSubmit = (data:any) => {
      console.log(data);
      products.push(data);
      // console.log(products);
      navigate("/");
    }
   
    
  return (
    <div>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>ProductId</label>
            <input type="number" id="id" {...register('id', {required:true})}  />
            {errors.id && errors.id.type === "required" && <span>Id is required</span>}
            <br />
            <label>Name</label>
            <input type="text" id="name" {...register('name',{required: true,minLength:3})} />
            {errors.name && errors.name.type === "required" && <span>Name is required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Minimum 3 chars are required</span>}
            <br />
            <label>Product Price</label>
            <input type="number" id = "price" {...register('price', {required:true})} />
            {errors.price && errors.price.type === "required" && <span>Price is required</span>}

            <input type="submit" value="Add Product"></input>
        </form>
    </div>
  )
}

export default AddProduct