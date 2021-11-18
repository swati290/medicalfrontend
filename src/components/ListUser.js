import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from '../services/UserService';
import axios from 'axios'
import clientlist1 from '../Images/clientlist1.jpg';
import TableScrollbar from 'react-table-scrollbar';

export default class ListUser extends Component{
  
  constructor(props){
    
    super(props);
   
    this.state = {
      error : null,
      items : [],
     
        user: [],
    
      showmeds:true,
      clicks: 0,
      show: true,
     
      
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    
  }

  

  searchHandler = e => {
		e.preventDefault()
    const data={
      userName:this.userName
    }
		console.log(this.userName)
   
		axios
			.post("http://localhost:9190/userservice/api/viewbyname/{userName}",this.userName)
			.then(response => {
				console.log(response)
         
				 	})
			.catch(error => {
				console.log(error)
			})
	}
	updateHandler = e => {
		e.preventDefault()
		console.log(this.state)
   
		axios
			.patch("http://localhost:9190/userservice/api/update")
			.then(response => {
				console.log(response)
       
				 	})
			.catch(error => {
				console.log(error)
			})
	}

  // deleteHandler = e => {
  //   e.preventDefault()
  //   console.log(this.state)
  //   axios
  //     .delete("http://localhost:9190/userservice/api/delete/{userName}")
  //     .then(response => {
  //       console.log(response)
         
  //       alert("delete Successfull");
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
  // cancel=(e) => {
  //   this.props.history.push("/")
  //  }

   deleteUser(userName){
    UserService.deleteUser(userName).then(res => {
      this.setState({user: this.state.user.filter(user => user.userName !== userName)});
      console.log(res);
      alert("user deleted Successfull");
          this.props.history.push("/listuser")
    });
  }
 async componentDidMount() {
    const url = "http://localhost:9190/userservice/api/viewallcustomer";
   fetch(url)
   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         items : result
       })
     },
     (error) => {
       this.setState({error})
     }
   )
   .catch(err=>{
     console.log(err.message);
   })
   

  }



  changeUsernameHandler = (event) => {
    this.setState({ userName: event.target.value });
}

  render() {
    
    const {error,items} = this.state;
   
    if(error){
    return(
      <div>Error:{error.message}</div>
    )
    }
    else{
        return (
          <div  style={{
          backgroundImage: `url(${clientlist1})`,
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             minHeight: "100%",
             minWidth: "1024px",
             width: "100%", 
             height: "100%",
             position: "absolute",
              top: "10",
              left: "0" ,
             //  paddingBottom:"10px",
             
              }} >
         <div>
             <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  fixed-top">
        <div class="container" marginright="800px">
        {/* <div ><img src={giftlogo} style={{ position: 'relative',height:'50px',width:'50px',top:'2px',left:'-20px'}}></img></div> */}
        <a class="navbar-brand" href=" ">  &nbsp;Medical Store Management System</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
        <a class="nav-link" href=" /"> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> AboutUs</a>
        </li>
        
        {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/admin/login">Admin Login</a>
          <a class="dropdown-item" href="/client/login">Client Login</a>
         
        </div>
      </li> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="/medicines"> Medicines </a>
        </li> */}
       </ul>
       </div>
        </div>
       </nav>
       
       
       </div>
       
          
              
              <br></br>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              
 <div>
                <div style={{marginLeft:"30%",marginRight:"20%"}}>
               
            
              <div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <input type="text"  name="userName"  style={{marginLeft:"70px"}} 
            value={this.userName}   onChange={this.changeUsernameHandler }  placeholder=" Enter Name"/>
             
{/* <SearchBar placeholder="Search"/> */}
             
 <a class="btn btn-success" onClick={this.searchHandler} 
 style={{ marginLeft:"10px", width:"200px",height:"30px" ,borderBlockColor:"black"}}   role="button">Search User</a>&nbsp;
      
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <h2 className="text-center">View Clients List</h2> 
              <div className="row" style={{height:"30vh",width:"150vh"}} >
              
            
              <table className="table table-bordered"  class="fixed_header" style={{borderBottomColor:"black"}} cellPadding="7px" border="1" width="8">
              
                <thead className="fixed">
                    <tr>
                    <th>User Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        
                        
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact_No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-secondary" style={{opacity:"0.65", }}>
                  {
                   items.map(item=>(
                   
                        <tr >
                          
                          <td key = {item.userId}>{item.userId}</td>
                          
                          <td key={item.firstName}>{item.firstName}</td>
                          <td key={item.lastName}>{item.lastName}</td>
                          <td key={item.userName}>{item.userName}</td>
                         
                          
                          <td key={item.address}>{item.address}</td>
                          <td key={item.email}>{item.email}</td>
                          <td key={item.contactNo}>{item.contactNo}</td>
                          
                          <td>
                           {/* <button onClick={this.updateHandler} href="/clientupdate">Update</button> */}
                           <a class="btn btn-success" onClick={this.updateHandler} href="/clientupdate" role="button">update</a>&nbsp;
                         </td>
                         <td>
                           {/* <button>Delete</button> */}
                           <a class="btn btn-success" onClick={() => this.deleteUser(item.userName)}  role="button">delete</a>&nbsp;
                         </td>
			  
                          
                        </tr>
                    ))
                  }
                </tbody>
              </table>
            
              </div>
              </div>
            </div>
            </div>
           
        )
    }
}
}