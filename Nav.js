import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";




const Nav = () => {

    const auth = localStorage.getItem('user');  //this is used to authenticatethe user in the localStorage.
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user'); //this  will clear the user data from the localstorage on cluick on the logout button.
        navigate('/signup')
    }
    return (
        <div>
            <img className="image" alt="logo" src="https://th.bing.com/th/id/OIP.BeLjfHKzG7PgdjI4otQdywHaE7?pid=ImgDet&rs=1"/>
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>

                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li></ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>}
        </div>
    )
}
export default Nav;