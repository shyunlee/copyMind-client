import { combineReducers } from 'redux';
import viewCopy from './viewCopyReducer'
import postCopyReducer from './postCopyReducer'
import loginReducer from './loginReducer'
import listCopyReducer from './listCopyReducer'


export default combineReducers({
    viewCopy,
    postCopyReducer,
    loginReducer,
    listCopyReducer
})