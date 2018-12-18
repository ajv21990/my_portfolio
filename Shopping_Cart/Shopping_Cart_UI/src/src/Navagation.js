import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login/LoginPage'
import Register from './components/register/Register'
import HomePage from './components/homePage/HomePage'


class Navagation extends React.Component {
    render(){
        return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/buy_home" component={HomePage}/>

                </Switch>
            </div>                
        </Router>

        )
    }
    // <Router>
    //     <div>
    //         <Route exact path="/" component={Login} />
    //         <Route exact path="/register" component={Register}/>
    //         <Route exact path="/home" component={HomePage}/>
    //     </div>
    // </Router>
}
export default Navagation