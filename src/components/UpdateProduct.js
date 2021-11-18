import React, { Component } from "react";
import { InputGroup } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import ProductService from '../services/ProductService';
//import '../css/AddPurchaseStock.css';
import axios from 'axios';

export default class UpdateProduct extends Component {
    service=new ProductService();
    constructor(props) {
        super(props);
        this.state = {
               productId: this.props.match.params.productId,
                productId:'',
                productName:'',
		        productIdentifier:'',
                productQty:'',
		        productPrice:'',

                error:
                {
                    productName:"",
                    productIdentifier:"",
                    productPrice:"",
                    productQty:"",
                    description:""
                }
        }
        this.changeProductNameHandler= this.changeProductNameHandler.bind(this);
        this.changeProductIdentifierHandler= this.changeProductIdentifierHandler.bind(this);
        this.changeProductQtyHandler = this.changeProductQtyHandler.bind(this);
        this.changeProductPriceHandler= this.changeProductPriceHandler.bind(this);
       
       
    }    

   

    componentDidMount(){
        
       
        this.service.findProductByProductIdentifier(this.state.productIdentifier).then((res)=>{
            let product =res.data;
            console.log("product"+product);
            this.setState({
               productId: product.productId,
                productName: product.productName,
                productIdentifier: product.productIdentifier,
                productQty:product.productQty,
                productPrice: product.productPrice,
                
            });
        }    
        );

    }

    //  SaveProduct = (e)=>{
    //     e.preventDefault();
    //     let product = { productId:this.state.productId,
	// 	ProductName: this.state.productName,
	// 	productIdentifier: this.state.productIdentifier,
	//  productQty: this.state.productQty,
    //           productPrice: this.state.productPrice
    //        };
    //    console.log(JSON.stringify(product));
    //    ProductService.updateproduct(product).then(_res =>{
     
    //         this.props.history.push('/ViewPurchaseStock');
    //      }).catch();
    //     }

   
    
    //  cancel(){
    //     this.props.history.push('/ViewPurchaseStock');
    // }
    // UpdateProduct = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     axios
    //       .post("http://localhost:9191/productservice/api/update", this.state)
    //       .then(response => {
    //         console.log(response)
             
    //         alert("product updated Successfull");
    //         this.props.history.push("/viewallmedicines")
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }
    //   cancel=(e) => {
    //     this.props.history.push("/")
    //    }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.productName) {
          flag = false;
          error.productNameError = "Product Name Is Required";
        }
        if (!this.state.productIdentifier) {
          flag = false;
          error.productIdentifierError = "Product Identifier is required";
        }
        if (!this.state.productPrice) {
          flag = false;
          error.productPriceError = "Product Price Is Required";
        }
        if (!this.state.productQty) {
            flag = false;
            error.productQtyError = "Product Qty Is Required";
          }
    
        this.setState({ error: error });
        return flag;
      };

       UpdateProduct = async (event) => {
        event.preventDefault();
    
        let isValid = this.validate();
        if (!isValid) {
          return false;
        }
        let product = {productId:this.state.productId,productName:this.state.productName, productQty:this.state.productQty, productPrice:this.state.productPrice,description:this.state.description};
        console.log("product=> "+JSON.stringify(product),"productIdentifier =>"+JSON.stringify(this.state.productIdentifier));
        this.service.modifyTraining(product,this.state.productIdentifier).then((res)=>{
          
          this.props.history.push("/viewallmedicines")
        }).catch((err)=> console.log(err));
        
      };
    
    changeProductNameHandler = (event) =>{
        this.setState({productName: event.target.value});
    }
    changeProductIdentifierHandler = (event) =>{
        this.setState({productIdentifier: event.target.value});
    }
  
    changeProductQtyHandler = (event) =>{
        this.setState({productQty: event.target.value});
    }
    changeProductPriceHandler = (event) =>{
        this.setState({productPrice: event.target.value});
    }
    
    
    render() {
        return (

            <div>
            <br></br> 
            <div className="container" style={{opacity:"0.5", width:"850px"}}>
                 <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3" style={{
                            backgroundColor:"black",
                            color:"white",
                        }}>

<div>
        
	<h1 style={{textAlign: "center", fontFamily: "Helvetica Neue",border:"black",borderWidth:"10px" }}>  update Purchase Stocks</h1>
                        <br />
                        <Form style={{ textAlign: "left" }}>
          

			    
                             <br /> 
                          
			  
                            <br />
                            
                <Form.Group controlId="formBasicName">
                                <Form.Label>Enter Product Name</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" name="productName" placeholder="Medicine Name" style={{ textAlign: "center" }} value={this.state.productName}
                                        onChange={this.changeProductNameHandler} />
                                </InputGroup>
                                {/* <div style={{ color: "#ffff33" }}>{this.state.emailError}</div> */}
                            </Form.Group>
			    
			    <br />
			    <Form.Group controlId="formBasicName">
                                <Form.Label>Enter product productIdentifier</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" name="productIdentifier" placeholder="Identifier" style={{ textAlign: "center" }} value={this.state.productIdentifier}
                                        onChange={this.changeProductIdentifierHandler} />
                                </InputGroup>
                                {/* <div style={{ color: "#ffff33" }}>{this.state.emailError}</div> */}
                            </Form.Group>
			    <br />
			    <Form.Group controlId="formBasicName">
                                <Form.Label>Enter product Quantity</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" name="productQty" placeholder="Quantity"style={{ textAlign: "center" }}  value={this.state.productQty}
                                        onChange={this.changeProductQtyHandler} />
                                </InputGroup>
                                {/* <div style={{ color: "#ffff33" }}>{this.state.emailError}</div> */}
                            </Form.Group>
			    <br />
			    <Form.Group controlId="formBasicName">
                                <Form.Label>Enter Cost</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" name="productPrice" placeholder="Total Cost" style={{ textAlign: "center" }} value={this.state.productPrice}
                                        onChange={this.changeProductPriceHandler} />
                                </InputGroup>
                                {/* <div style={{ color: "#ffff33" }}>{this.state.emailError}</div> */}
                            </Form.Group>		
                            <Form.Group controlId="formBasicButton">
                                <Button variant="success" type="submit" onClick={this.UpdateProduct} className="savebuttons" style={{ padding: "7px 50px", marginLeft: "20px",marginTop:"15px" }}>  SAVE</Button>{' '}
                                {/* <Button variant="danger" type="submit" onClick={this.cancel.bind(this)}  className="deletebuttons" style={{ padding: "7px 50px", marginLeft: "200px",marginTop:"-68px" }}> CANCEL </Button> */}
                            </Form.Group>
                            {/* <ToastContainer /> */}
                        
                        </Form>
                        
                </div>
                </div>
                </div>
                </div>
                </div>
               
                
                    
        )
    }


}
