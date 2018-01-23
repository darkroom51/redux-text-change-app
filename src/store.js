import {createStore, combineReducers} from 'redux'
import changeTextReducer from './state/changeText'

const reducer = combineReducers({  //reducery w store
    changeText: changeTextReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //including chrome dev tools
)

export default store