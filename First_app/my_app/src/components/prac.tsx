import { table } from 'console';
import React from 'react'

interface Employee{
    id:number;
    name:string;
    permanent:boolean;
    branch:string;
}

export const Prac = () => {
    const arr:Employee[]=[
        {id:100, name:"Shyam", permanent:true, branch: "Airoli"},
        {id:101, name:"Abhi", permanent:true, branch: "Worli"},
        {id:102, name:"Ganesh", permanent:false, branch: "Bandra"},
        {id:103, name:"Prashant", permanent:true, branch: "Wadala"}
    ]
  return (
    <table>
        <th>
            <td>Id</td>
            <td>Name</td>
            <td>Permanent</td>
            <td>Branch</td>
        </th>
    {
        arr.map(employee => (
            <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.permanent}</td>
                <td>{employee.branch}</td>
            </tr>
        ))
    }
    </table>
  )
}
