import React, { Component } from "react";

export default class GetMedicineComponent extends Component {
    state = {
        medicine: this.props.medicine,
    };
    render() {
        return (
            
            <div style={{textAlign:'center'}}>
			           <div className="card border-0 mb-3" style={{
                           width: "170px",
                           backgroundColor: "white",
                           boxShadow: "0 0 17px rgb(219,217,217)"}}>
                    <div className="card-body">
			            <img className="card-img-top" src={'../../../Images/' + this.state.medicine.medicine_Id + '.jpg'} alt={this.state.medicine.medicine_Id} />
                        <h5 style={{textTransform:'uppercase',fontWeight:'bold',color:'#e76e1d',fontSize:'22px'}}>{this.state.medicine.medicine_name}</h5>
                        
                    
                        <div className="float-left" style={{color:'black',fontWeight:'bold',fontSize:"20px"}}>
                            Rs.{this.state.medicine.price}
                            <a href={`/bookOrder/${this.state.medicine.medicine_Id}`}style={{marginTop:"10px",height:"35px",width:"120px",fontFamily:" Arial, Helvetica, sans-serif;",fontSize:"18px",fontWeight:"bold",color:"white",backgroundColor:"orange",border:"0px"}}
                             type="button"> 
                               CART
                             </a>
                        </div> 
                         
                        </div>
                        {/* float-left ends here */}
                        
                        
                      
                    </div>
                </div>
           
        )
    }
}
