import React, { Component } from 'react'

export class FooterComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
               <footer className="footer" style={{position: "absolute",
  left: "0",
 marginTop: "800px",
  width: "100%",
  backgroundColor: "black",
  opacity:"0.8",
  color: "white",
  textAlign: "center"}}>
                   <span className="text-muted">All Rights Reserved 2021 @Medon</span>
                   </footer> 
            </div>
            
        )
    }
}