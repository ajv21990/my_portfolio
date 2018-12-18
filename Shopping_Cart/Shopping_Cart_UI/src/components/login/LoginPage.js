
import React from 'react'
import TextInput from '../common/TextInput'
import '../../componentCSS/LoginRegister.css'
import LoginApi from '../../api/LoginApi'
<<<<<<< HEAD
import { connect } from 'react-redux'
import { loginUser } from '../../actions/UserActions'
=======
import {connect} from 'react-redux'
import {loginUser} from '../../actions/UserActions'
>>>>>>> e4ff8f19e85bc288e6885b593b2cee8ada32dc6e


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
<<<<<<< HEAD
            buy_sell: ""
        }
    }


=======
            buy_sell:""
        }
    }

 
>>>>>>> e4ff8f19e85bc288e6885b593b2cee8ada32dc6e
    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
    }

<<<<<<< HEAD
    login = () => {
        (this.state.email === "" || this.state.password === "" || this.state.buy_sell === "") ? alert("Must fill in all fields")
            : this.props.login(this.state)
=======
    login = () =>{
        (this.state.email === "" || this.state.password === "" || this.state.buy_sell === "")? alert("Must fill in all fields") 
        :this.props.login(this.state)
>>>>>>> e4ff8f19e85bc288e6885b593b2cee8ada32dc6e
        this.props.history.push("/buy_home")

        //if buy_sell is sell go to seller home else go to buyer home
        // (this.state.buy_sell === "Sell")?this.props.history.push("/sell_home")
        // :this.props.history.push("/buyhome")
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> e4ff8f19e85bc288e6885b593b2cee8ada32dc6e

    goToRegister = () => this.props.history.push("/Register")

    render() {
        return (
            <div className="LoginContainer">
                <div className="border rounded mx-auto LoginTable">
                    <h2 className="LoginHeader">Shopping Cart Login</h2>
<<<<<<< HEAD
                    <hr />
                    <div className="mx-auto" style={{ width: "50%" }}>
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange} />
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange} />
                        <div className="form-group">
                            <label>What are you planning to do?</label>
                            <select id="buy_sell" name="buy_sell" className="form-control" onChange={this.handleChange}  >
                                <option>Select Option</option>
                                <option className="Buyer" val="Buyer">Buy</option>
                                <option className="Seller" val="Seller">Sell</option>
                            </select>
                        </div>
=======
                    <hr/>
                    <div className="mx-auto" style={{width: "50%"}}>
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange}/>
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange}/>
                        <div className="form-group">
                <label>What are you planning to do?</label>
                <select id="buy_sell" name="buy_sell" className="form-control" onChange={this.handleChange}  >
                    <option>Select Option</option>
                    <option className="Buyer" val="Buyer">Buy</option>
                    <option className="Seller" val="Seller">Sell</option>
                </select>
            </div>
>>>>>>> e4ff8f19e85bc288e6885b593b2cee8ada32dc6e
                        <button className="btn btn-primary mt-2 mb-2" onClick={this.login}>Log-In</button>
                        <button className="btn btn-info ml-2" onClick={this.goToRegister}>New User?</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: data => {
            dispatch(loginUser(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
