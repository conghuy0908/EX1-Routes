import React, { useState } from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const Router = () =>{
    const [user,setUser] = useState(null);
return(
    <Routes>
    <Route path='home' element={<Home user={user}/>}/>
    <Route path='/' element={<Login setUser={setUser}/>}/>
    </Routes>   
)
}
export default Router;