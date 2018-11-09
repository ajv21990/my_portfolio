import React from 'react'
import TextInput from '../common/TextInput'
import '../../componentCSS/LoginRegister.css'
import LoginApi from '../../api/LoginApi'


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
 
    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]:val
        })
    }

    login = () => (this.state.email === "" || this.state.password === "")? alert("Must fill in all fields") 
    : LoginApi.Login(this.state,this.onSuccess,this.onError)  

    onSuccess = resp => (resp.data.Item === true) ? console.log("success") : alert("Invaild Credintials")   
// If true go to homepage

    onError = error=>console.log(error)



    goToRegister = () => this.props.history.push("/Register")

    render() {
        return (
            <div className="LoginContainer">
                <div className = "border rounded mx-auto LoginTable">
                    <h2 className="LoginHeader">Shopping Cart Login</h2>
                    <hr/>
                    <div className="mx-auto" style={{width: "50%"}}>
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange}/>
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange}/>
                        <button className="btn btn-primary mt-2 mb-2" onClick={this.login}>Log-In</button>
                        <button className="btn btn-info ml-2" onClick={this.goToRegister}>New User?</button>
                    </div>            
                </div>
            </div>
        )
    }
}
