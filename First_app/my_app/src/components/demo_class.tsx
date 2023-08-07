import React from 'react';
export class ClassComponent extends React.Component<any,any>
{
    constructor(props:any){
        super(props);
        this.state = {name : "shyam", address : "Worli"};
    }

    render(): React.ReactNode {
        return(
            <div>
        <h1 style={{color : "red"}}>Hello from Demo Class component </h1>
        <p>{this.state.name}</p> 
        <p>{this.state.address}</p>
        <p>Hii I am shyam</p>
        </div>)
    }
}