import { Component } from "react";

import { Redirect } from "react-router-dom";
import medicine from '../Images/medicine.png';


export default class AdminHome extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    this.adminLogin=this.adminLogin.bind(this);
    this.Login1=this.Login1.bind(this);
     
  }
  
  adminLogin = () =>{
    this.props.history.push('/adminLogin');
   
  }
  Login1 = () =>{
    this.props.history.push('/login1');
  }
 clientregistration= () =>{
    this.props.history.push('/register');
  }
  ChatBot1=()=>{
    this.props.history.push('/chatbot')
  }
  
    render() {
        return (<div>
           <div>
             <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  fixed-top">
        <div class="container">
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
        <li class="nav-item">
          <a class="nav-link" href="/chatbot"> ChatBot</a>
        </li>
        
       
        
       </ul>
       </div>
        </div>
       </nav>
       
       
       </div>
          <div  style={{
           backgroundImage: `url(${medicine})`,
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
              <div class="jumbotron jumbotron-fluid" style ={{ position: "absolute", top: "30%", left: "10%"}} >
                {/* <div class="container" style ={{ textAlign: "center"}}>
                  <h1>Welcome to Medon</h1>
                  
                 //<p class="lead">Medical Store Management System <br/>We help you feel better as we pray for the best.</p>
                  
               
                </div> */}
                <button style={{marginLeft: "10px",  width:"100px", borderBlockColor:"black"}}className="btn btn-primary" onClick = {this.Login1}>Login</button>
                <button style={{marginLeft: "10px",width:"100px",borderBlockColor:"black"}}  className="btn btn-primary"onClick = {this.clientregistration}>Register </button>
                {/* <button style={{marginLeft: "10px",  width:"100px", borderBlockColor:"black"}}className="btn btn-primary" onClick = {this.ChatBot1}>Chatbot</button> */}
                {/* <img src='./Images/ClientLogo.webp' style={{height: "50px", width: "50px", position:"cover"}}></img> */}
              </div>
              <div>
              <li class="nav-item">
          <a class="nav-link" href="/chatbot"> ChatBot</a>
        </li>
        
                 
              </div>

       </div>
       </div>
          
        )
        
    }
}