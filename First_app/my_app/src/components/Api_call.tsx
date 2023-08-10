import axios from 'axios'
import React, { useEffect } from 'react'

const Api_call = () => {
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(response=>console.log(response)).catch(error=>console.log("Some Error " + error));
    
      return () => {
        
      }
    }, [])
    
  return (
    
    <div>Api_call</div>
  )
}

export default Api_call