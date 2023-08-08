import React from 'react'

const EventDemo = () => {
//     const handleEvent = ()=>{
//         alert("Button Click Event")
//     }
  return (
    <div>
        <button onClick={()=>alert("Button Clicked")}>Click</button>
    </div>
  )
}

export default EventDemo