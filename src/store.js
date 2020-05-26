import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux'


const store = createStore(reducer,applyMiddleware(thunk))

export default store