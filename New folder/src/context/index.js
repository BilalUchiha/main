import { render } from "@testing-library/react";
import React from "react";
const MyContext = React.createContext()
class MyProvider extends React.Component{
    state = {
        user:[
            {id:1,name:"ahmad"},
            {id:2,name:"bilal"}
        ]
    }
    render(){
        return(
            <>
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
            </>
    
        )
    }
}


export {MyContext,MyProvider}
