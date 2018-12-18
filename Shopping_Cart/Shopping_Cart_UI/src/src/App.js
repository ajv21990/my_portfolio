import React, { Component } from 'react';
import Navagation from "./Navagation"
// import {connect} from 'react-redux'
// import {loginUser} from './actions/UserActions'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Navagation
      />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.UserReducer
//   }
// }
// export default connect(mapStateToProps)(App)
