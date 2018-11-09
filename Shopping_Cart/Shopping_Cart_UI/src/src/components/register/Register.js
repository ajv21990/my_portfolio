import React from 'react'
import TextInput from '../common/TextInput'
import '../../componentCSS/LoginRegister.css'
import RegisterApi from '../../api/RegisterApi';

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            FName:"",
            LName:"",
            Email:"",
            Password:"",
            ConfirmPassword:""
        }
    }

    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]:val
        })
    }
    register = () => (this.state.Email === "" || this.state.Password === ""||this.state.ConfirmPassword === "" ||this.state.FName === "" ||this.state.LName === "")? alert("Must fill in all fields") 
    :RegisterApi.Register(this.state,this.onSuccess,this.onError)

    onSuccess = resp => console.log(resp)
    // Go to homepage

    onError = error=>console.log(error)



    render(){
        return(
            <div className="RegisterContainer">
            <div className = "border rounded mx-auto LoginTable">
                <h2 className="LoginHeader">Register New User</h2>
                <hr/>
                <div  className="mx-auto mb-2" style={{width: "65%"}}>
                <TextInput label="First Name" id="FName" type="text" val={this.state.FName} handleChange={this.handleChange}/>
                <TextInput label="Last Name" id="LName" type="text" val={this.state.LName} handleChange={this.handleChange}/>
                <TextInput label="Email" id="Email" type="email" val={this.state.email} handleChange={this.handleChange}/>
                <TextInput label="Password" id="Password" type="password" val={this.state.Password} handleChange={this.handleChange}/>
                <TextInput label="Confirm Password" id="ConfirmPassword" type="password" val={this.state.ConfirmPassword} handleChange={this.handleChange}/>
                <button className="btn btn-primary mt-2 mb-2" onClick={this.register}>Register</button>
                </div>
            </div>
            </div>
        )
    }
} 