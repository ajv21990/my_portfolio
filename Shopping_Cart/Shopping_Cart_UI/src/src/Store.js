import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import UserReducer from './reducers/UserReducer'

const Store = createStore(
    combineReducers({UserReducer}), //any and all reducers used
    {},                             //any intial state you want set
    applyMiddleware(thunk, promise())
)

export default Store