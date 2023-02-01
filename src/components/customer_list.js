import React from 'react'

const CustomerList = (props) =>{

    return(
        <>
    
        
        <div key={props.customer.id}>
        <div>name:{props.customer.name}</div>
        <div>name:{props.customer.age}</div>
        <hr></hr>
        </div>
    
        </>
    )
}

export default CustomerList