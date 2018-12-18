import { resolve } from "uri-js"
import axios from 'axios'

export  function loginUser(data) {
    return {
        type: "SET_LOGIN_STATE",
        payload: axios.post(
            "http://localhost:3000/api/userservice/login",
            data,)
            .then(resp=>(resp.data.Item === true) ? console.log("successful Login") : alert("Invaild Credintials")
            )
            .catch(err => console.log("An error occurred while logging in", err)) 
    }
}



export  function logoutUser(){
    return {
        payload: new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(false);
            },2000)
        })
    }
}
