import { Component } from "react";
//import back from "../Images/AdminBackground.jpg"

export default class AboutUs extends Component {
    render() {
        return (
            <div
            style={{
                //backgroundImage: `url(${back})` ,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                
               minHeight: "100%",
                minWidth: "1024px",
                width: "100%", 
                height: "100%",
  
                position: "fixed",
                 top: "0",
                 left: "0" ,
                //  paddingBottom:"10px",
                }}>
                              <div>
             <nav class="navbar navbar-expand-lg navbar-dark  bg-dark  fixed-top">
        <div class="container">
        
        <a class="navbar-brand" href=" ">  &nbsp;Medon</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
 
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
                    <div style={{color:"white", marginTop:"50px"}}>
                <h1> Welcome to Medon</h1>
                <p>Medon  is the complete medical store management system is so designed as to ease the work load of medical shop professionals.
                    <br/> The main feature includes generates bill and report and stock control,accounting ,
                      client and vendor management.
                      <br />
                      This system helps you to track all the records regarding stock and seales of products medical shop moreover medical shop report maintaining. </p>
            </div>
            </div>
        )
    }
}