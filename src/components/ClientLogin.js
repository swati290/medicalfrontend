import React, {Component} from "react";
import { Redirect } from "react-router-dom";
//import ViewAllMedicineByClient from './ViewAllMedicineByClient'
import ClientRegistration from "./ClientRegistration";
import clientLogin1 from '../Images/clientLogin1.jpg'
import clientLogin2 from '../Images/clientLogin2.jpg';
import UserService from '../services/UserService';
import loginlogo from '../Images/loginlogo.jpg';
class ClientLogin extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
    
        console.log("token is",token);
         console.log("role is",role);
        var loggedIn = true
        var uRole = ''

        if(token === null)
        {
            loggedIn = false
        }
        if(role !== null)
        {
          uRole = role
        }

        this.setState({
          loggedIn: loggedIn,
          role: uRole
        })
                

        this.state = {
            renderComponent : "LOGIN_CLIENT",
            user: [],
            userName: '',
            Password: '',
            status: '',
            usernameError:'',
            passwordError:'',
            Success: ''
            
        }
    }
    eventHandler = (e) =>
    {
      
        this.setState({
            [e.target.name]: e.target.value
        })
     
    }
    validate = () => {
        let usernameError="";
        let passwordError="";
     
     
      if (this.state.password.length <= 7)
      {
         passwordError = "Length of password should be greater than or equal to 8";
      }
      if (this.state.userName.length <= 7)
      {
         usernameError = "Username should be greater than or equal to 8";
      }
      
    //   if(!this.state.Pwd)
    //   {
    //       passwordError ="Password cannot be blank";
    //   }
      if(!this.state.userName)
      {
          usernameError ="Username cannot be blank";
      }
      if (usernameError || passwordError) {
        this.setState({usernameError, passwordError });
        setTimeout(() => {
            this.setState({
                usernameError:'',
                passwordError:'',
                
            });
          }, 1000);
        return false;
      }
  
      return true;
    };
    
        
    

    clientRegister = () =>
    {
        this.setState({
            renderComponent : "REGISTER_CLIENT"
        })
    }
    clientLogin=(e)=> 
    {
        e.preventDefault();
        const valid = this.validate(e);
        console.log(valid);
        if(valid===true)
        {
        console.log(this.state.userName + this.state.Password)
        UserService.generateToken(this.state.userName,this.state.password)
        .then(
                res => {
                    console.log(res)
                    this.setState({user : res.data,
                    status: res.status})  
                    this.props.history.push(`/clientHome/${this.state.user.user_id}`)
                }
            )
        .catch(
            err => {
                console.log(err)
                this.setState({
                    Success: "Login Failed.Enter Valid Credentials"
                });
            }
        )
        } 
    }
    componentDidMount(){
        console.log("store"+this.props.store)
    }
    render(){
        console.log("login");
        if((this.state.status===200) )
        {
            localStorage.setItem("token","khfhdskhfkjsdhfkhdfsdjfhsd");
            localStorage.setItem("role",'user');
            localStorage.setItem("userObj",JSON.stringify(this.state.user));
            
        }
        if(this.state.renderComponent === 'LOGIN_CLIENT')
        {
        return(
            <div style={{
                backgroundImage: `url(${clientLogin1})` ,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            
               minHeight: "100%",
                minWidth: "1024px",
                width: "100%", 
                height: "135%",
                position:"absolute",
                 top: "0",
                 left: "0" ,
                
                }}>
                    <div>
             <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  fixed-top">
        <div class="container">
        {/* <div ><img src={loginlogo} style={{ position: 'relative',height:'50px',width:'50px',top:'2px',left:'-20px'}}></img></div> */}
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
        
        
       </ul>
       </div>
        </div>
       </nav>
       
       
       </div>
            <div class="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark" style={
                {
                    width: "320px",
                    height: "450px",
                    background:"rgba(0,0,0,0.5)",
                    color:"#fff",
                    top: "35%",
                    left: "50%",
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    boxSizing: "border-box",
                    opacity: "0.8",
                    // padding :"30px 30px",
                }
            }>
                <img src={'loginlogo.jpg'}  
                style={
                    {
                       // backgroundImage:`url(${loginlogo})`,
                        // width: "100px",
                        // height: "100px",
                        // borderRadius: "50%",
                        // position: "absolute",
                        // top:"-40px",
                        
                        // left: "calc(50% - 50px)",
                        
                    }
                }
                className="clientLogin2">
                    
                </img>
                <div class="row">
                    <div class="col">
                        <h1
                        style={{
                            margin: "0",
                            padding: "40px 0 20px",
                            textAlign: "center",
                            fontSize: "32px"
                        }}
                        >Login</h1>
                    <form>
                        
                            <label for ="UserName" class="col-sm-5 col-form-label"
                            style={{
                                margin:"0",
                                padding: "0",
                                fontWeight: "bold",
                            }}>
                                <b>Username</b>
                            </label>
                            <div class= "col-m-4">
                                <input 
                                type="text"
                                class="form-control form-control-sm"
                                name="userName"
                                id="userName"
                                onChange={this.eventHandler}
                                required
                                style={{
                                    width:"100%",
                                    marginBottom: "20px",
                                    border: "none",
                                    borderBottom: "1px solid #181818",
                                    backgroundColor: "#d0d0d0",
                                    // background: "transparent",
                                    height:"40px",
                                    fontSize: "16px"
                                }}/>
                            </div>
                            <div className="font-size-small text-danger">{this.state.usernameError}</div>
                        
                            <label for ="Password" class="col-sm-5 col-form-label"
                             style={{
                                margin:"0",
                                padding: "0",
                                fontWeight: "bold",
                            }}>
                                <b> Password</b>
                            </label>
                            <div class= "col-m-4">
                                <input 
                                type="password"
                                class="form-control form-control-sm"
                                name="password"
                                id="pwd"
                                onChange={this.eventHandler}
                                required
                                style={{
                                    width:"100%",
                                    marginBottom: "20px",
                                    border: "none",
                                    borderBottom: "1px solid #181818",
                                    backgroundColor: "#d0d0d0",
                                    // background: "transparent",
                                    height:"40px",
                                    fontSize: "16px"
                                }}/>
                            </div>
                            <div className="font-size-small text-danger">{this.state.passwordError}</div>
                        
                        <div class="row-mt-3">
                            <div class="col">
                                <button 
                               class="btn btn-primary btn-m" 
                               style={{
                                   border: "none",
                                   outline: "none",
                                   height: "40px",
                                   background:"#1f4d6f",
                                   color: "#fff",
                                   fontSize: "18px",
                                   borderRadius: "20px",
                                  width: "120px",
                                  cursor: "pointer",
                                  
                                   
                               }
                               }
                                onClick={this.clientLogin} disabled={(this.state.userName<7 || this.state.pwd >8 )?true:false}
                                >
                                    Login
                                    
                                </button>
                            </div>


                                {/* <div class="row-mt-3">
                                    <div class="col">
                                        <h5 onClick={this.clientRegister} style={{
                                            marginTop:"10px",
                                        }}><a class="link-primary">Registration</a></h5>
                                    </div>
                                </div> */}
                                <div class="text-danger"><b>{this.state.Success}</b></div>
                        </div>
                    </form>
                    <br/>
                    </div>

                </div>

                    <h2></h2>
            </div>
            </div>
        );
        }
        else if (this.state.renderComponent === 'REGISTER_CLIENT')
        {
            return<div>
                <ClientRegistration/>
            </div>
        }

    }
}

export default ClientLogin;
