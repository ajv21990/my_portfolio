import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login/LoginPage'
import Register from './components/register/Register'


const Navagation = props => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register}/>
        </div>
    </Router>
)
export default Navagation