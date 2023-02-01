import React from 'react'
import ReactDom from 'react-dom'
import Hook from './app'
class App extends React.Component{

    render(){
        return(
            <Hook/>
        )
    }
}
ReactDom.render(<App/>,document.getElementById('root'))