import React from 'react'

import background4 from '../Images/background4.jpg';
//import SearchBar from "@bit/nsebhastian.react_fusejs.search-bar";

const UserTable = () => (
   
   
   <div>
 <div  style={{
           backgroundImage: `url(${background4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100%",
            minWidth: "1024px",
            width: "100%", 
            height: "100%",
            position: "absolute",
             top: "0",
             left: "0" ,
            //  paddingBottom:"10px",
            
             }} >

    <h2>List Of User</h2>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <div >
 
<input type="text"  name="userName" style={{marginLeft:"200px"}} placeholder=" Enter Name"/>
{/* <SearchBar placeholder="Search"/> */}
 &nbsp;&nbsp; 
 &nbsp;	             
 <a class="btn btn-success" style={{marginLeft: "10px",  width:"200px",height:"30px" ,borderBlockColor:"black"}}   role="button">Search User</a>&nbsp;
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <table class="table-bordered" style={{borderBottomColor:"black"}} cellPadding="10px" border="1">
      <thead>
        <tr>
         
         <th>Custome Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Username</th>
          <th>Email</th>
          <th>Contact No</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td>asd</td>
          <td>asdas</td>
          <td>asd</td>
          <td>abc@gmail.com</td>
          <td>892323131231</td>
          <td>asdasd</td>
          <td>
              
              <button className="button muted-button">Delete</button>
            </td>
        </tr>
     
      </tbody>
    </table>
    </div>
    </div>
  )
  
  export default UserTable