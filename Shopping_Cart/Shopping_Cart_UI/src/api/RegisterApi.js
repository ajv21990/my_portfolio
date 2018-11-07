import axios from 'axios'

export default class RegisterApi {
    static Register(data, onSuccess, onError){
        axios.post("http://localhost:3000/api/userservice/register",
        data,
    ).then(onSuccess)
    .catch(onError)
    }
}