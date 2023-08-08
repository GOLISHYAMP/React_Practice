import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const SayHello = (msg:any)=>{
        alert(msg);
    }
  return (
    <div>
        <ChildComponent greetParent={SayHello}></ChildComponent>
    </div>
    
  )
}

export default ParentComponent