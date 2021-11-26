import { Component } from "react";
import ProductService from "../services/ProductService";
//import GetproductComponent from "./GetproductComponent";
import clientLogin1 from '../Images/clientLogin1.jpg';
export default class ViewAllMedicinesClient extends Component {
  
      constructor(props) {
          super(props)
      
          this.state = {
              product: []
          }
  
          this.deleteProduct = this.deleteProduct.bind(this);
          this.viewAllProduct = this.viewAllProduct.bind(this);
          this.updateProduct = this.updateProduct.bind(this);
          
      }
  
      deleteProduct(productIdentifier){
        ProductService.deleteProduct(productIdentifier).then(res => {
          this.setState({products: this.state.product.filter(product => product.productIdentifier !== productIdentifier)});
         {
          alert("product deleted Successfull");
                   }
                             this.props.history.push("/viewallmedicines")
        });
      }
  
      viewAllProduct(product){
        this.props.history.push('/view-product/'+product);
      }
  
      updateProduct(_ProductId){
        this.props.history.push('/updateproduct');
      }
      
      componentDidMount(){
        ProductService.viewAllProduct().then((res) => {
          console.log(res.data);
          this.setState({product: res.data});
        });
      }

      addproduct = () =>{
        this.props.history.push('/addproduct');
      }
      async componentDidMount() {
        const url = "http://localhost:9191/productservice/api/viewallproduct";
       fetch(url)
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             product : result
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
      // addproduct(){
      //   this.props.history.push('/add-product/_add');
      // }
  
      render() {

        return(
        <div  style={{
            backgroundImage: `url(${clientLogin1})`,
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
   <li class="nav-item">
     <a class="nav-link" href="/chatbot1"> Chatbot1</a>
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
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          return (
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div>
                <h2 className="text-center">Product List</h2> 
                <div className="row">
                  {/* <button type="submit" class="btn btn-primary"  style={{width: "187px", height: "42px",borderRadius:"30px"}} onClick={this.addproduct}  >Add product</button> */}
                </div>
                
                <br></br>
                
                <div className="row"  style={{width: "200px", height: "42px"}}>
                <table class="table table-bordered" style={{borderBottomColor:"black"}}>
                  <thead style={{backgroundColor:"#474747", color:"white"}}>
                      <tr>
                          <th>ProductId</th>
                    
                          <th>ProductName</th>
                         
                          <th>productIdentifier</th>
                       
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody class="table-secondary" style={{opacity:"0.85", }}>
                    {
                      this.state.product.map(
                        product => 
                          <tr key = {product.productId}>
                            <td>{product.productId}</td>
         
                            <td>{product.productName}</td>
         
                            <td>{product.productIdentifier}</td>
          <td>{product.productQty}</td>
          <td>{product.productPrice}</td>
                           
                            <td>
                              <button style={{marginLeft: "10px",width: "100px"}} onClick={() => this.updateProduct(product.productId)} className="btn btn-info">Add To Cart </button>
                              {/* <button style={{marginLeft: "10px",width: "100px"}} onClick={() => this.deleteProduct(product.productIdentifier)} className="btn btn-danger">Delete </button> */}
                              {/* <button style={{marginLeft: "10px",width: "100px"}} onClick={() => this.viewAllProduct(product.productId)} className="btn btn-info">View </button> */}
                            </td>
                          </tr>
                      )
                    }
                  </tbody>
                </table>
                </div>
              </div>
          )
          </div>
         ); }
  }
  