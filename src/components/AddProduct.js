import React, { Component } from "react";
import { InputGroup } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import ProductService from '../services/ProductService';
//import '../css/AddPurchaseStock.css';
import axios from 'axios';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
               productId: this.props.match.params.productId,
                productId:'',
                productName:'',
		        productIdentifier:'',
                productQty:'',
		        productPrice:''
        }
        this.changeProductNameHandler= this.changeProductNameHandler.bind(this);
        this.changeProductIdentifierHandler= this.changeProductIdentifierHandler.bind(this);
        this.changeProductQtyHandler = this.changeProductQtyHandler.bind(this);
        this.changeProductPriceHandler= this.changeProductPriceHandler.bind(this);
       
       
    }    
    componentDidMount(){
        
        let product = this.state.product;
        ProductService.addproduct(product).then((res)=>{
            let product =res.data;
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
    SaveProduct = e => {
        e.preventDefault()
        console.log(this.state)
        axios
          .post("http://localhost:9191/productservice/api/addproduct", this.state)
          .then(response => {
            console.log(response)
             
            alert("product Added Successfull");
            this.props.history.push("/viewallmedicines")
          })
          .catch(error => {
            console.log(error)
          })
      }
      cancel=(e) => {
        this.props.history.push("/")
       }
      
    
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
        
	<h1 style={{textAlign: "center", fontFamily: "Helvetica Neue",border:"black",borderWidth:"10px" }}>  Add Purchase Stocks</h1>
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
                                <Button variant="success" type="submit" onClick={this.SaveProduct} className="savebuttons" style={{ padding: "7px 50px", marginLeft: "20px",marginTop:"15px" }}>  SAVE</Button>{' '}
                                <Button variant="danger" type="submit" onClick={this.cancel.bind(this)}  className="deletebuttons" style={{ padding: "7px 50px", marginLeft: "200px",marginTop:"-68px" }}> CANCEL </Button>
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
