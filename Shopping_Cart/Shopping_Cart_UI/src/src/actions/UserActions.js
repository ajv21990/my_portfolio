import { resolve } from "uri-js";

export function loginUser() {
    return {
        type: "SET_LOGIN_STATE",
        payload: new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(true);
            }, 2000)
        })
    }
}

export function logoutUser(){
    return {
        payload: new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(false);
            },2000)
        })
    }
}
