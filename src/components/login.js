import React from 'react';
import { Component } from 'react';
import "../App.css";


 class login extends React.Component{
     constructor(props)
     {
         super(props);
         this.state={
             msg:"",
             loginerror:""
             
         }
     }

    authenticate =() =>{
     
     let userName= this.refs.userName.value;
     let password = this.refs.password.value;

     const url ="http://localhost:9190/userservice/api/authenticate";
     fetch(url)
     .then(response => response.text())
     .then(role => {
        
            if (role == "ADMIN")
            this.props.history.push("/adminhome/"+userName);
            else if (role == "USER")
            this.props.history.push("/clienthome/"+password);
           
            else if (role == "")
            this.setState({loginerror:"Wrong ID/pwd"});
     });
     }
    render(){
        return(<div style={{marginLeft:"25%",marginRight:"50%"
            }} >
            
                
                <h2>Login Page</h2><br/>
                <div>
                   <form>
                   <div className="form-group">
                   Enter Email:  <input 
                        className="form-control" type="text"  ref="userName" /><br/></div>

                   <div className="form-group">
                   Enter Password:   <input 
                        className="form-control" type="password"  ref="password" /><br/></div>
	

<input type="button" onClick={this.authenticate} style={{marginLeft: "10px"}} class="btn btn-success" value="Login" />
                
                   </form>
                   <br/>
                   <p>{this.state.loginerror}</p>
                </div>
            </div>
        );
    }
}
export default login;