
import React ,{ Component } from 'react';
const Table =(props)=>{
 
    return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.age}</td>
    </tr>
   
  </tbody>
</table>
    )
}
export default Table;