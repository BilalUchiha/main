import React from "react";
import CustomerList from "./customer_list";
const Customer = (props) =>{
return(
    <>
    { props.customer.map((item)=>
    (
        <CustomerList customer={item}></CustomerList>
    ))}
    
    </>
)
}
export default Customer