import React, {Component} from "react";
import {Route, BrowserRouter, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import Register from "./Register";

class AppRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter basename={"/"}>
                <HashRouter>
                    <h1>Website Template</h1>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/logIn">Log In</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <Route 
                            exact path="/"
                            component={Home}/>
                        <Route
                            path="/logIn"
                            component={LogIn}/>
                        <Route
                            path="/register"
                            component={Register}/>
                    </div>
                </HashRouter>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default AppRoute;