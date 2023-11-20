import React, { useEffect, useState } from "react";


const ProductList=()=>{

    const[products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts()
    },[])
    
    const getProducts = async()=>{
        let result=await fetch("http://localhost:5000/products");
        result=await result.json();
        setProducts(result);
    };

    const deleteProduct = async(id)=>{
        console.log(id);
        // let result=await fetch("http://localhost:5000/product/",{
        //     method: "DELETE",
        // })
        // result=await result.json();
        // if(result){
        //     alert("Product deleted")
        // }
    }
    

    return(
        <div className="product-list">
            <h1>Product List</h1>
            <ul>
                <li>S.no</li>
                <li>name</li>
                <li>category</li>
                <li>company</li>
                <li>operations</li>
            </ul>
            {
                products.map((item, index)=>
                <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button onClick={()=>deleteProduct(item._id)} >Delete</button></li>
            </ul>
                )
            }
        </div>
    )
};
export default ProductList;