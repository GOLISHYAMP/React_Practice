import React from 'react'

const ChildComponent = (props:any) => {
  return (
    <div>
        <button onClick={props.greetParent("Say Hello from Child")}>Click_Here</button>
    </div>
  )
}

export default ChildComponent