import React, { useState ,useEffect} from "react";
import { useNavigate  } from "react-router-dom";



const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState('');

    const navigate = useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user'); //used to store the data to the loacal storage like on localhost.
        if(auth){
            navigate('/')
        }
    })

    const collectData = async () => {

        if(!name || !email || !password) {
            setError(true)
            return false;
        }
        console.log(name, email, password)
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({name,email, password}),
            headers: {
                'Content-Type' : 'application/json'
                 },

        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/')

    }

    return (
        
            <form className="Register">
                <h1>Register</h1>
                <input className="inputbox" value={name} type="text"
                    onChange={(e) => setName(e.target.value)} placeholder="enter your name" />
                {error && !name && <span className="validation">please enter your name</span>}

                <input className="inputbox" value={email} type="text"
                    onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" />
                {error && !email && <span className="validation">please enter email</span>}

                <input className="inputbox" value={password} type="current-password"
                    onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" />
                {error && !password && <span className="validation">please enter password</span>}

                <button className="submit" onClick={collectData} type="submit" >submit</button>

            </form>
            
    )
};
export default Signup;