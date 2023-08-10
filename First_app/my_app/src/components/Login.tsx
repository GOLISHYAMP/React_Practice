import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit, formState : {errors}} = useForm();
    const navigate = useNavigate();
    const handleLogin = (data:any) => {
        if(data.email === "shyam@gmail.com" && data.pwd==="shyam")
        {
            sessionStorage.setItem("emailId",data.email);
            navigate("/demo");
        }
        else
        {
            alert("Invalid credentials");
        }
      }
  return (
    <div>
        <form  onSubmit={handleSubmit(handleLogin)}>
             <h1>Login Page</h1>
            <label className='form-label'>Email</label>
            <input type="text" id="email" {...register('email', {required:true})}  />
            {errors.email && errors.email.type === "required" && <span>Email is required</span>}
            <br />
            <br />
            <label className='form-label'>Password</label>
            <input type="password" id = "pwd" {...register('pwd', {required:true})} />
            {errors.pwd && errors.pwd.type === "required" && <span>Password is required</span>}
            <br />
            <br />
            <input type="submit" value="Login"></input>
        </form>
    </div>
  )
}

export default Login