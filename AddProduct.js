import React, { useState } from "react";


const AddProduct=()=>{
    const[name,setName] =useState('');
    const[price,setPrice] = useState('');
    const[category,setCategory] = useState('');
    const[company,setCompany] = useState('');
    const[error,setError] = useState('');

    const addProduct = async()=>{
        

        console.log(name,price,category,company)
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id; //this is used to get user_id from localstorage.
        let result = await fetch("http://localhost:5000/add-product",{
            method: 'POST',
            body: JSON.stringify({name,price,category,company,userId}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result=await result.json();
        console.log(result);
    }


    return(
        <div className="AddProduct">
            <h1>Add Product</h1>
            <input type="text" className="inputbox" placeholder="enter product name"
            onChange={(e)=>{setName(e.target.value)}} value={name} />
            {error && !name && <span className="validation">Enter a valid name</span>}

            <input type="text" className="inputbox" placeholder="enter product price" 
            onChange={(e)=>{setPrice(e.target.value)}} value={price} />
            {error && !price && <span className="validation">Enter price</span>}

            <input type="text" className="inputbox" placeholder="enter product category" 
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
            {error && !category && <span className="validation">Enter a valid category</span>}

            <input type="text" className="inputbox" placeholder="enter product company" 
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            {error && !company && <span className="validation">Enter a valid company name</span>}

            <button className="submit" onClick={addProduct}>add product</button>
        </div>
        
    )
}
export default AddProduct;