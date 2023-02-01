import React from "react";
import { MyContext } from "../context";
const UserList = () =>{
    const context = React.useContext(MyContext)
    console.log(context)
    return(
        <>
        {context.user.map((item)=>(
            <div key={item.id}>
                <div>name:{item.name}</div>
            </div>
        ))}
        
        </>
    )
}
export default UserList