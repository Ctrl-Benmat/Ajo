import React, { Component } from 'react'

 class Table1 extends Component {
    render() {
        return (
<div>
    <h4>Manage Group</h4>
    <p>GroupName:GMC</p> 
    <p>Amount:100,000</p> 
    <p>Members:10</p> 
    <p>Duration:10 weeks</p>
     <table class="table table-bordered table-striped table-hover ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">PhoneNunmer</th>
      <th scope="col">Position</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tunde West Taribo</td>
      <td>west@gmail.com</td>
      <td>09076843012</td>
      <td>1st</td>
      <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Aisha Bimpe Zulum</td>
      <td>zulumaisha@gmail.com</td>
      <td>08076673022</td>
      <td>2nd</td>
      <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Lola Debby Kayode</td>
      <td>debby@gmail.com</td>
      <td>07032457801</td>
      <td>3rd</td>
      <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <td>Joseph Adeboye</td>
        <td>josephkunle7@gmail.com</td>
        <td>08097564312</td>
        <td>7th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
    <tr>
        <th scope="row">5</th>
        <td>Omidiji Florence Abosede</td>
        <td>Abosede555@gmail.com</td>
        <td>08162134561</td>
        <td>5th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
    <tr>
        <th scope="row">6</th>
        <td>Agboola Tosin</td>
        <td>tosin154@yahoomail.com</td>
        <td>09087652314</td>
        <td>4th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
    <tr>
        <th scope="row">7</th>
        <td>Banjo Funmilayo</td>
        <td>Funmiomowunmi@gmail.com</td>
        <td>07098673912</td>
        <td>9th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
    <tr>
        <th scope="row">8</th>
        <td>Lawal Hameedah</td>
        <td>Hameedahlawal@gmail.com</td>
        <td>09054667812</td>
        <td>6th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
    <tr>
        <th scope="row">9</th>
        <td>Alade Tosin Daniel</td>
        <td>danieltosin@gmail.com</td>
        <td>09076543211</td>
        <td>8th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
    <tr>
        <th scope="row">10</th>
        <td>Danlad Philip</td>
        <td>Danlad@gmail.com</td>
        <td>07087906555</td>
        <td>10th</td>
        <td>
          <button className="btn btn-sm btn-primary mr-2">Edit</button> 
          <button className="btn btn-sm btn-danger">Delete</button>   
        </td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}

export default Table1
