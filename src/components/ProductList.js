import { Component } from 'react';
// import ProductService from '../services/ProductService';
 import axios from 'axios';
//import medicine from '../Images/medicine';
import ProductService from '../services/ProductService';
export default class ProductList extends Component{
  constructor(props){
    super(props);
   
    this.state = {
      error : null,
      items : [],
      showmeds:true,
      clicks: 0,
      show: true
    };
  }
 
 async componentDidMount() {
    const url = "http://localhost:9191/productservice/api/viewallproduct";
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
 
 
  
 
  render() {
    
    const {error,items} = this.state;
   
    if(error){
    return(
      <div>Error:{error.message}</div>
    )
    }
    else{
        return (
         
         
          
            <div>
                <div style={{marginLeft:"30%",marginRight:"20%"}}>
               
              <h2 className="text-center">View Products List</h2> 
              
              <br></br>
              <div className="row">
              
              
              <table className="table table-bordered" style={{borderBottomColor:"black"}} cellPadding="10px" border="1">
                <thead >
                    <tr>
                    <th> productId</th>
                        <th>productName</th>
                        <th>productIdentifier</th>
                        <th>productQty</th>
                        <th>productPrice</th>
                        <th>description</th>
                        
                        
                    </tr>
                </thead>
                <tbody className="table-secondary" style={{opacity:"0.65", }}>
                  {
                   items.map(item=>(
                   
                        <tr >
                          <td key = {item.productId}>{item.productId}</td>
                          
                          <td key={item.productName}>{item.productName}</td>
                          <td key={item.productIdentifier}>{item.productIdentifier}</td>
                          <td key={item.productQty}>{item.productQty}</td>
                          <td key={item.productPrice}>{item.productPrice}</td>
                          <td key={item.description}>{item.description}</td>
                          
        
                          
                        </tr>
                    ))
                  }
                </tbody>
              </table>
              </div>
              </div>
            </div>
            
           
        )
    }
}
}