import React from 'react'
import {render} from 'react-dom'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        console.log("1 - constructor is invoked")
    }
    componentWillMount(){
            console.log("get intial state life hook - we can set intial state of the Component");
    }
   
    render(){
        return(<ul><li>Test</li></ul>);
    }

} 
render(<TodoList />,document.getElementById("app"));