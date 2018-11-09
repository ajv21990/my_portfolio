import axios from 'axios'

export default class LoginApi {
    static Login(data, onSuccess, onError){
        axios.post("http://localhost:3000/api/userservice/login",
        data,
    ).then(onSuccess)
    .catch(onError)
    }
}