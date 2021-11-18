import {Component} from 'react';
import { InputGroup } from 'react-bootstrap';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import ClientService from '../services/ClientService';
//import clientLogin1 from '../Images/clientLogin1.jpg';
//import clientregi2 from '../Images/clientregi2.jpg';
import orderMedicine from '../Images/orderMedicine.jpg';
class ClientUpdate extends Component {
    constructor(props) {
        super(props);

        //creating state obj for initiaizing customer properties
        this.state = {
            User_id: '',
            firstName: '',
            lastName:'',
            userName:'',
            pwd: '',
            contact_No: '',
            email: '',
            address:'',
            status:'',
           
            // clientNameError: "",
            // usernameError: "",
            // passwordError: "",
            // mobileNoError: "",
            // emailError: "",
            // addressError: "",
            // consultantError: "",
        
        }

         //Binding event handlers
        this.changeUser_idHandler=this.changeUser_idHandler.bind(this);
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePwdHandler = this.changePwdHandler.bind(this);
        this.changeContact_noHandler = this.changeContact_noHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        //this.changeConsultant_nameHandler = this.changeConsultant_nameHandler.bind(this);
       // this.save = this.save.bind(this);
    }

    //validate all properties
    validate = (e) => {
        let {
          firstNameError,
          lastNameError,
          usernameError,
          passwordError,
          contact_NoError,
          emailError,
          addressError,
          consultantError,
            successfull=''
        } = this.state;
    
        if (!this.state.firstName) {
       firstNameError = "This field can not be blank";
        }
        if (!this.state.lastName) {
         lastNameError = "This field can not be blank";
          }
       
        if (!this.state.userName) {
          usernameError = "This field can not be blank";
        }
        if (!this.state.pwd) {
          passwordError = "This field can not be blank";
        } else if (this.state.pwd.length < 8) {
          passwordError = "Password must be 8 character long";
        }
        if (!this.state.contact_No) {
          contact_NoError = "This field can not be blank";
        }
        if (!this.state.email) {
          emailError = "This field can not be blank";
        }
    //     else if(this.state.email_id.length!==0){
    //         if (!validator.isEmail(this.state.email_id)){
    //             emailError = "Enter valid email";
    //         }
    // }
        if (!this.state.address) {
          addressError = "This field can not be blank";
        }
       
        
        if (
          firstNameError ||
          lastNameError ||

          usernameError ||
          passwordError ||
          contact_NoError ||
          emailError ||
          addressError ||
          consultantError
        ) {
          this.setState({
           firstNameError,
          lastNameError,
            usernameError,
            passwordError,
            contact_NoError,
            emailError,
            addressError,
            consultantError
          });
          setTimeout(() => {
            this.setState({
              firstNameError:"",
              lastNameError:"",
              usernameError: "",
              passwordError: "",
              contact_NoError: "",
              emailError: "",
              addressError: "",
              consultantError: ""
            });
          }, 1000);
          return false;
        }
    
        return true;
      };
    renderLoginPage=() =>{
        return <Redirect to='/clientLogin'></Redirect>;
    }
  
    submitHandler = e => {
      e.preventDefault()
      console.log(this.state)
      axios
        .post("http://localhost:9190/userservice/api/update/{userName}", this.state)
        .then(response => {
          console.log(response)
           
          alert("update Successfull");
        })
        .catch(error => {
          console.log(error)
        })
    }
    cancel=(e) => {
      this.props.history.push("/")
     }
    

   
    // changeEmailHandler = (event) => {
    //     this.setState({ email: event.target.value });
    // }

    // submitHandler = e => {
    //   e.preventDefault()
    //   console.log(this.state)
    //   axios
    //     .post('http://localhost:9190/userservice/api/save', this.state)
    //     .then(response => {
    //       console.log(response)
           
    //       alert("register Successfull");
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
    // cancel=(e) => {
    //   this.props.history.push("/")
    //  }



    changeUser_idHandler = (event) => {
        this.setState({ user_id: event.target.value });
    }
    
    changeFirstnameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastnameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeUsernameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }
    changePwdHandler = (event) => {
        this.setState({ pwd: event.target.value });
    }
    changeContact_noHandler = (event) => {
        this.setState({ contact_No: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

  



render() {
    
      
      return (
        <div style={{
            //backgroundImage: `url(${orderMedicine})` ,
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
            
              
               <div className="container" style={{opacity:"0.7", width:"450px",height:"600px"}}>
                    <div className="row" style={{ 
                            backgroundColor: "white", color:"black" , width: "450px", height:"500px", marginTop:"100px"
                        }}>
                        
                        <div>
                        <Form className="register-form" style={{textAlign:"left"}} >
                            <h1 style={{ fontSize:"30px", padding: "10px 20px",textAlign: "center" }} >
                               Update 
                            </h1>
                            <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label control-label"><b> First Name: </b></label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-sm" name="firstName" placeholder=" Client First Name" value={this.state.firstName}
                                        onChange={this.changeFirstnameHandler} />
				             </div>
                             <div className="font-size-small text-danger">{this.state.firstNameError}</div>
                             </div>
                             <div class="mb-3 row">
                                <label class="col-sm-6 col-form-label control-label"><b> Last Name: </b></label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-sm" name="lastName" placeholder="Client Last Name" value={this.state.lastName}
                                        onChange={this.changeLastnameHandler} />
				             </div>
                             <div className="font-size-small text-danger">{this.state.lastNameError}</div>
                             </div>
                            
                            
			                <div class="mb-3 row ">
                                <label class="col-sm-6 col-form-label control-label"><b> UserName</b></label>                                
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-sm" name="userName" placeholder="Username" value={this.state.userName}
                                        onChange={this.changeUsernameHandler } />                                
                                		
                            </div>
                            <div className="font-size-small text-danger">{this.state.usernameError}</div>
                            </div>
                           
                            <div class="mb-3 row ">
                                <label class="col-sm-6 col-form-label control-label"><b> Password</b></label>                                
                                <div class="col-sm-6">
                                    <input type="password" class="form-control form-control-sm" name="pwd" placeholder=" Password" value={this.state.pwd}
                                        onChange={this.changePwdHandler} />                               
                                 
                            </div>
                            <div className="font-size-small text-danger">{this.state.passwordError}</div>
                            </div>
                            <div class="mb-3 row ">
                                <label class="col-sm-6 col-form-label control-label"><b>Confirm Password</b></label>                                
                                <div class="col-sm-6">
                                    <input type="password" class="form-control form-control-sm" name="pwd" placeholder=" Confirm Password" value={this.state.pwd}
                                        onChange={this.changePwdHandler} />                               
                                 
                            </div>
                            <div className="font-size-small text-danger">{this.state.passwordError}</div>
                            </div>
                            
				            <div class="mb-3 row ">
                                <label class="col-sm-6 col-form-label control-label"><b> Phone Number</b></label>                                
                                <div class="col-sm-6">
                                    <input type="phone" class="form-control form-control-sm" name="contact_No" placeholder=" Phone Number" value={this.state.contact_No}
                                        onChange={this.changeContact_noHandler} />                                
                                  
                            </div>
                            <div className="font-size-small text-danger">{this.state.contact_NoError}</div>
                            </div>                            
                            
			                <div class="mb-3 row ">
                                <label class="col-sm-6 col-form-label control-label"><b> EmailId</b></label>                                
                                <div class="col-sm-6">
                                    <input type="email" class="form-control form-control-sm" name="email" placeholder=" Email Id" value={this.state.email}
                                        onChange={this.changeEmailHandler} />                                
                                 
                            </div>
                            <div className="font-size-small text-danger">{this.state.emailError}</div>
                            </div>
			                
			                <div class="mb-3 row ">
                                <label class="col-sm-6 col-form-label control-label"><b> Address</b></label>                               
                                <div class="col-sm-6">
                                    <textarea  class="form-control form-control-sm" name="address" placeholder=" Address" value={this.state.address}
                                        onChange={this.changeAddressHandler} />                               
                                 
                            </div>
                            <div className="font-size-small text-danger">{this.state.addressError}</div>
                            </div>
			                
			                <div class="mb-3 row ">
                               
                                <div class="col-sm-6">
                                                             
                                 
                            </div>
                          
                            </div>
			                
			               
                                                     		
                            <div>
                                <Button variant="success" type="submit" onClick={this.submitHandler} disabled={(this.state.firstName<7 || this.state.lastName<4 || this.state.userName>7|| this.state.pwd<8  )} style={{ padding: "7px 50px", marginLeft: "30px",marginTop:"-25px" }}>  Update </Button>{' '}
                                <Button variant="danger" type="cancel" onClick={this.renderLoginPage} style={{ padding: "7px 50px", marginLeft: "20px", marginTop:"-25px" }}> Back to Login </Button>
                            </div>          
                            <div className="font-size-medium text-success" style={{float:"center", fontSize:"20px"}}><b>{this.state.successfull}</b></div>                  
                        </Form> 

           <div>
             
              
              {
                this.state.status === 200 && <div>
                  <button
                class="btn btn-primary btn-sm "
                onClick={this.renderLoginPage}
                >
                  Back to login
              </button></div>
              }
            </div>
  </div>
  </div>
  </div></div>
      );
  
    }
  }
  export default ClientUpdate;