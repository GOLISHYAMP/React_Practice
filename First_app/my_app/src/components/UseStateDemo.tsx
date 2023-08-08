import React, {useState, useEffect} from 'react'

const UseStateDemo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Shyam");
    const increment= ()=> setCount(count+2);
    const decrement = () => setCount(count-2);
    const changeName = () => {
        if (name === "Shyam")
        {
            setName("Vinod");
        }
        else{
            setName("Shyam");
        }
    };
// very important hook in react
    useEffect(() =>{
        document.title = `You clicked ${count} times`;
    })
  return (
    <div>
        <p>The Value of count : {count}</p>
        <button style={{background:"green"}} onClick={increment}>Increment</button>
        <button style={{background:"red"}} onClick={decrement}>Decrement</button>
        <p>Name : {name}</p>
        <button onClick={changeName}>Click to changeName</button>
    </div>
  )
}

export default UseStateDemo