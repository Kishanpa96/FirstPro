import React from "react";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Component/signup";
import PrivetComponent from "./Component/PrivetComponent";
import Login from "./Component/Login";
import AddProduct from "./Component/AddProduct";
import ProductList from "./Component/ProductsList";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Nav/> 
      
      <Routes>
        <Route element={<PrivetComponent/>}>
      
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>update product</h1>}/>
        <Route path="/logout" element={<h1>logout</h1>}/>
        <Route path="/profile" element={<h1>profile</h1>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
