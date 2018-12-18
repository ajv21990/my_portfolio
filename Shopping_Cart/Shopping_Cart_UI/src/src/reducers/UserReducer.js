const UserReducer = (
    state = {
        isLoggedIn: false
    }, action) => {
debugger
        switch(action.type){
            case 'SET_LOGIN_STATE_FULFILLED':
            state = {
                isLoggedIn: true
            }
            break;
        }
    return state
}
export default UserReducer