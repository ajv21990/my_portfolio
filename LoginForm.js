import React from 'react'
import TextInput from '../Common/Form/TextInput'
import SubmitButton from '../Common/Form/SubmitButton'
import LoginApi from '../Api/LoginApi'
import FacebookLogin from '../Common/FaceBook/FacebookLogin'
import '../SocialButtons.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    componentDidMount=()=>document.addEventListener('FBObjectReady', this.initializeFacebookLogin)  
    componentWillUnmount=()=>document.removeEventListener('FBObjectReady', this.initializeFacebookLogin)
    initializeFacebookLogin = () => this.FB = window.FB
    

    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]:val
        })
    }

    logIn = () => (this.state.email === "" || this.state.password === "")? alert("Must fill in all fields") 
    : LoginApi.Login(this.state,this.onSuccess,this.onError)  

    onSuccess = resp =>(resp.data.item === true) ? this.props.history.push("/profilePage") 
    : alert("Invaild Credintials")   

    onError = error=>console.log(error)

    onFacebookLogin = (loginStatus) => (loginStatus === true)?this.props.history.push("/profile"):""

    loginSetStateForFbEmail = fbEmail =>this.setState({email: fbEmail});

    goToRegister = () => this.props.history.push("/Register")

    //EXTRA CODE
    // onFBLogout=()=>{
    //     this.FB.logout(function(response) {
    //         // Person is now logged out
    //         console.log(response)
    //      });
    //   }
    //grabs fbemail from FB
    // var fbEmail = ""
    // this.FB.api(`/${resultObject.user.id}`, {fields: 'email'}, (response)=> {
    //     fbEmail = response.email
    //     this.loginSetStateForFbEmail(fbEmail)
    //   });
    // onSignIn = googleUser=>{
    //     var profile = googleUser.getBasicProfile();
    //     console.log('Need: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //   }

    render() {
        return (
            <div className="loginForm" style={{padding:"241px",backgroundImage:"url('http://farm8.staticflickr.com/7328/9469919915_d8a5f73efb_h.jpg')", backgroundSize:"cover" }}>
                <div className = "col-md-10 border rounded mx-auto" style={{width: "900px",backgroundColor: "white"}}>
                    <h2 className="mt-4">Eleveight Login</h2>
                    <hr/>
                    <div className="col-md-6 mx-auto" style={{width: "400px"}}>
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange}/>
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange}/>
                        <div className="row">
                         <SubmitButton className="btn btn-primary mt-2 mb-2 ml-3" label="Log In" onClick={this.logIn}/>   
                         <p className="mt-2 ml-3">or <button className="btn btn-link"onClick={this.goToRegister}>Sign up for Eleveight</button> </p>                        
                        </div>
                        <FacebookLogin onLogin={this.onFacebookLogin} className="mt-2">
                        <button className="loginBtn loginBtn--facebook mb-3">Login with Facebook</button>
                        </FacebookLogin>
                        <div className="g-signin2 mb-3"  data-width="150" data-height="35" data-onsuccess="onSignIn"></div>
                    </div>            
                </div>
            </div>
        )
    }
}
