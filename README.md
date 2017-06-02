# React-Component-life-cycle
# Life cycle phases
* Mounting Phase
* Updating Phase
* Unmounting Phase


## A React component’s lifecycle hooks are as follows:
* constructor() - mounting
* componentWillMount() - mounting
* componentDidMount() - mounting
* componentWillReceiveProps() - updating
* shouldComponentUpdate() - updating
* componentWillUpdate() - updating
* render() - mounting, updating
* componentDidUpdate() - updating
* componentWillUnmount() - unmounting

## What React Lifecycle Hooks are used for:
### constructor()
The constructor function’s most common uses are to set the component’s initial state (i.e. default values), and to bind the component instance to functions triggered by events (otherwise references to this in the functions will fail).

To make sure the component is initialized correctly, the first line of this function should be a call to the parent’s constructor method: super(props)

Example:
```
constructor(props) {
        super(props);
        console.groupEnd();
        console.group(this.props.item+" Mounting phase");
        console.log(this.props.item + ": 1 - constructor is invoked")
        this.handleRemove = this.handleRemove.bind(this);
    }
```
### componentWillMount()

Personally, I’ve never used it. Facebook’s docs don’t have much to say about it, other than it’s possible to set state here without triggering a re-render. The docs suggest using constructor() for that instead.

Example:
```
componentWillMount() {
        console.log(this.props.item + ": 2- componentWillMount invoked before render method is called and after constructor is called");
    }
``` 

### componentDidMount()

At this point the component has mounted. It’s a good place to start timers and initiate asynchronous network requests that will hydrate the component or its children.

Example:
```
componentDidMount() {
        console.group(this.props.item+ " Mounted phase");
        console.log(this.props.item + ": 4- componentDidMount will be invoked after render method")
        console.groupEnd();
    }
 ```   

### componentWillReceiveProps(nextProps)

This function receives new props while you can still see your old props. This is a opportunity to check out the new props and see what’s changed. It’s an opportunity to set state based on the new properties (e.g. the user clicked ‘reset’ on a form they were half-way through editing: time to throw away those input values).

Example:
```
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
```
### shouldComponentUpdate(nextProps, nextState)

This is fun: returning false from this function aborts a re-render(). Returning true will continue with the render. While the current implementation honors the return value of shouldComponentUpdate, the docs say that it may be used as a ‘hint’ in the future, meaning React may make up its own mind about whether a component should be re-rendered or not.

You can make a decision about re-rendering here because shouldComponentUpdate receives the next props and state values before they’re used in a render. You can use them to compare to the current props and state and decide if anything important has changed. If it hasn’t, you can return false to skip the render.

Example:
```
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
```

### componentWillUpdate()

Another one I’ve never used. It’s called immediately before render(). If there’s something pressing you need to do then, this is the time!

Example:
```
componentWillUpdate(nextProps, nextState) {

        //Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.
        console.log(this.props.item + ": 7- componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.  ");
    }
```
### render()

So you render the component. Remember to base your renders on your props and state only, otherwise componentWillReceiveProps and shouldComponentUpdate are useless.

Example:
```render() {
        console.log(this.props.item + ": 3- render is invoked after componentWillMount method")
        console.groupEnd();
        return (<li>{this.props.item}<span onClick={this.handleRemove}> x</span></li>);
    }
```
### componentDidUpdate()

Now the component has rendered, is there anything you need to do? Facebook suggest this is a good opportunity to operate on the browser’s DOM in a way that’s outside React’s concern. Again, I don’t use it.

Example:

```
 componentDidUpdate(nextProps, nextState) {
        console.group(this.props.item+" updating phase");
        console.log(this.props.item + ": 8-Finally componentDidUpdate is called after the render method.")
        console.groupEnd();
    }
```
### componentWillUnmount()

So now your component is done, it’s time to remove it from the DOM. Is there anything that needs tidying up? Like unfinished network requests, or canceling timers started in componentDidMount? Do it here.

Example:
```
componentWillUnmount(nextProps, nextState) {
        console.group(this.props.item+" unmounting phase");
        console.log(this.props.item + " 9- component unmounted successfully");
        console.groupEnd();
    }
```    



