import React from 'react'
import {render} from 'react-dom'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        console.log("1 - constructor is invoked")
    }
    componentWillMount(){
            console.log("2- componentWillMount invoked before render method is called and after constructor is called");
    }
   
    render(){
        console.log("3- render is invoked after componentWillMount method")
        return(<ul><li>Test</li></ul>);
    }
    componentDidMount(){
        console.log("4- componentDidMount will be invoked after render method")
    }
    shouldComponentUpdate(){
        console.log("5- shouldComponentUpdate returns boolean and render is called if true is returned ")
        return true;
    }

} 
render(<TodoList />,document.getElementById("app"));