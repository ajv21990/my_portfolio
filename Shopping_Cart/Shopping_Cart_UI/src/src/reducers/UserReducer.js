const UserReducer = (
    state = {
        isLoggedIn: false
    }, action) => {

        switch(action.type){
            case 'SET_LOGIN_STATE':
            state = {
                isLoggedIn: true
            }
            break;
        }
    return state
}
export default UserReducer