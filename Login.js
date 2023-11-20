import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])


    const handleLogin = async () => {

        console.log(email, password);
        
        let result = await fetch("http://localhost:5000/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/')

        } else {
            alert("enter a valid input")
        }

    }
    return (
        <div className="login" >
            <h1>Login Here</h1>
            <input type="text" className="inputbox" placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)} value={email}></input>
            

            <input type="password" className="inputbox" placeholder="Enter your email address"
                onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button className="submit" onClick={handleLogin} type="button">submit</button>
        </div>
    )



}
export default Login;