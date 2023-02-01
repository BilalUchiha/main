import React from 'react'
import  ReactDOM  from 'react-dom'
import Customer from './components/customer'
import Header from './components/header'
import './style.css'
class App extends React.Component{
    state = {
        customer:[
            {id:1,name:'ahmad',age:23},
            {id:2,name:'bilal',age:34},
            {id:3,name:"habib",age:18}
        ]

    }

    render(){
        return(
            <>
            <Header></Header>
            <Customer customer={this.state.customer}>

            </Customer>
            </>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))