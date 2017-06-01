import React from 'react'
import { render } from 'react-dom'
import ListItem from './components/ListItem.jsx'
import { Route, Link } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.editItem = this.editItem.bind(this);
        this.remove = this.remove.bind(this);
        this.state = { "todos": ["eat", "sleep", "code"] };
    }
    editItem() {
        var todo = document.getElementById('text').value;
        const todos = this.state.todos.concat(todo);
        this.setState({ "todos": todos });
    }
    remove(item) {
        //console.log(item);
        //delete this.state.todos;
        let todos = this.state.todos;
        let updatedTodos = todos.filter((todo) => {
            return todo != item;
        })
        this.setState({ "todos": updatedTodos });
    }

    render() {
        return (<div>
            <input type="text" id="text" />
            <input type="button" onClick={this.editItem} value="add todo" />
            <ul>{this.state.todos.map((todo, index) => <ListItem key={index} item={todo} removeItem={this.remove}></ListItem>)}</ul>
        </div>
        );
    }


}
class AppRoutes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Router>
            <Route path="/" component={TodoList}>
            </Route>
        </Router>)
    }
}
render(<AppRoutes />, document.getElementById("app"));