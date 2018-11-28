import React, { Component } from 'react';
import Navagation from "./Navagation"
import {connect} from 'react-redux'
import {loginUser} from './actions/UserActions'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navagation isLoggedIn={this.props.user.isLoggedIn}
      />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.UserReducer
  }
}
export default connect(mapStateToProps)(App)
