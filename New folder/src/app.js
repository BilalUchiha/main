import React,{useState}  from "react";
import { MyProvider } from "./context";
import User from "./components/user";
const Hook = () =>{
 
    return(
        <MyProvider>
            <User></User>
        </MyProvider>
    )
}
export default Hook