import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =({setUser}) =>{
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(email,password)
        if(!email || !password) return;
        setUser({email: email, password: password});
        navigate('/home')
    };
    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="form-row">
                    <label htmlFor="email" className="form-lable">Email</label>
                    <input type='email' className="form-input" id='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    <label htmlFor="password" className="form-lable">Password</label>
                    <input type='password' className="form-input" id='password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
                    <button onSubmit={handleSubmit}>Login</button>
                </div>
            </form>
        </div>    
    )
}
export default Login;