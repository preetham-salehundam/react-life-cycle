import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        console.groupEnd();
        console.group(this.props.item+" Mounting phase");
        console.log(this.props.item + ": 1 - constructor is invoked")
        this.handleRemove = this.handleRemove.bind(this);
    }
    componentWillMount() {
        console.log(this.props.item + ": 2- componentWillMount invoked before render method is called and after constructor is called");
    }
    componentDidMount() {
        console.group(this.props.item+ " Mounted phase");
        console.log(this.props.item + ": 4- componentDidMount will be invoked after render method")
        console.groupEnd();
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.group(this.props.item+ " preupdate phase");
        if (this.props.item == nextProps.item) {
            console.log(this.props.item + ": %c6- shouldComponentUpdate returns boolean and render is called if true is returned ", "color:red;font-weight:bold;");
            console.groupEnd();
        } else {
            console.log(this.props.item + ": 6- shouldComponentUpdate returns boolean and render is called if true is returned ")
        }

        return this.props.item != nextProps.item;
    }

    componentWillUpdate(nextProps, nextState) {

        //Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.
        console.log(this.props.item + ": 7- componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.  ");
    }
    componentDidUpdate(nextProps, nextState) {
        console.group(this.props.item+" updating phase");
        console.log(this.props.item + ": 8-Finally componentDidUpdate is called after the render method.")
        console.groupEnd();
    }
    componentWillReceiveProps(nextProps) {
        /****
         * componentWillReceiveProps enables to update the state depending 
         * on the existing and upcoming props, without triggering another rendering. 
         * One interesting thing to remember here is that there is no equivalent method 
         * for the state as state changes should never trigger any props changes.
         */
        console.group(this.props.item+" updating phase");
        console.log(this.props.item + ": 5-componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering. ")
        console.groupEnd();
    }
    componentWillUnmount(nextProps, nextState) {
        console.group(this.props.item+" unmounting phase");
        console.log(this.props.item + " 9- component unmounted successfully");
        console.groupEnd();
    }
    handleRemove() {
        this.props.removeItem(this.props.item);
    }
    render() {
        console.log(this.props.item + ": 3- render is invoked after componentWillMount method")
        console.groupEnd();
        return (<li>{this.props.item}<span onClick={this.handleRemove}> x</span></li>);
    }
}

export default ListItem;