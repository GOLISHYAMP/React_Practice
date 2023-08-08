import React from 'react';
interface Props {
    id:number;
    name: string;
}
 
interface State {
    id:number;
    name:string;
}
 
class Class_prac extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = {id : 100, name : "shyam"};
    }
    render() { 
        return ( 
            <table>
                <th>
                    <td>id</td>
                    <td>name</td>
                </th>
                <tr>
                    <td>{this.state.id}</td>
                    <td>{this.state.name}</td>    
                </tr>

            </table>
         );
    }
}
 
export default Class_prac;