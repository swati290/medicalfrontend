//import logo from './logo.svg';
import './App.css';
import React from 'react';
//  import ChatBot from "react-simple-chatbot";
//import {simple} from "semantic-ui-react";




import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminHome from './components/AdminHome';
//import AdminLogin from './components/AdminLogin';

import AboutUs from './components/AboutUs';
import profile from './components/Profile';
import"bootstrap/dist/css/bootstrap.min.css";
import ClientRegitstration from './components/ClientRegistration';
import ClientLogin  from './components/ClientLogin';
import AdminLogin from './components/AdminLogin';
import ListUser from './components/ListUser';
import GetData from './components/ListUser';
//import ViewAllMedicines from './components/ViewAllMedicines';
//import ClientHome from './components/ClientHome';
import AdminPage from './components/AdminPage';
//import Register1 from './components/Register1';
//import Product from './components/Product';
import UserTable from './components/UserTable';
import ProductList from './components/ProductList';
import ClientUpdate from './components/ClientUpdate';
import login from './components/login';
import Login1 from './components/Login1';
import DeleteClient from './components/DeleteClient';
import ViewAllMedicines from './components/ViewAllMedicines';
import viewallmedicinesClient from './components/ViewAllMedicinesClient';
import AddProduct from './components/AddProduct';
import ChatBot1 from './components/ChatBot1.js';
import ClientPage from './components/ClientPage';
import UpdateProduct from './components/UpdateProduct';

import ViewAllMedicinesClient from './components/ViewAllMedicinesClient';
import Profile from './components/Profile';
//import FooterComponent from './components/FooterComponent';
function App() {

const steps=[
  {
    id:'Greet',
    message:'Heloo,Welcome to our website',
    trigger:'Ask Name'
  },
  {
    id:'Ask Name',
    message:'Plaese enter your name',
    trigger:'waiting1'
  },
  {
    id:'waiting1',
    message:true,
    trigger:'Name'
  },
  {
    id:'Name',
    message:'Hi {previousValue},Please Select your issue',
    trigger:'issues'
  },
{
  id:"issues",
  options:[
    {value:"React",label:"React",trigger:"React"},
    {value:"Angular",label:"Angular",trigger:"Angular"},
],
},
{
  id:'React',
  message:'Thank for telling your react issue',
  end:true
},
{
  id:'Angular',
  message:'Thanks for telling your Angular issue',
  end:true
}
];

  return (

    
    <div className="App">
       <Router>
    <Switch>
       <Route path="/" exact component={AdminHome}></Route>
       <Route path="/register" exact component={ClientRegitstration}></Route>
       <Route path="/clientlogin" exact component={ClientLogin}></Route>
       <Route path="/adminlogin" exact component={AdminLogin}></Route>
       <Route path="/usertable" exact component={UserTable}></Route>
       <Route path="/listproduct" exact component={ProductList}></Route>
       <Route path="/listuser" exact component={ListUser}></Route>
       <Route path="/clientupdate" exact component={ClientUpdate}></Route>
       <Route path="/adminpage" exact component={AdminPage}></Route>
       <Route path="/clientpage" exact component={ClientPage}></Route>
       <Route path="/deleteclient" exact component={DeleteClient}></Route>
       <Route path="/login" exact component={login}></Route>
       <Route path="/profile" exact component={Profile}></Route>
       <Route path="/login1" exact component={Login1}></Route>
       <Route path="/ChatBot" exact component={ChatBot1}></Route>
       <Route path="/addproduct" exact component={AddProduct}></Route>
       <Route path="/updateproduct" exact component={UpdateProduct}></Route>
       <Route path="/viewallmedicines" exact component={ViewAllMedicines}></Route>
       <Route path="/viewallmedicinesClient" exact component={ViewAllMedicinesClient}></Route>
       <Route path="/about" exact component={AboutUs}>
      
       </Route>
         </Switch>
         <div>
        
        </div>
         </Router>
     
   {/* <ChatBot steps={steps}/> */}
   
     
    </div>


  );
}

export default App;
