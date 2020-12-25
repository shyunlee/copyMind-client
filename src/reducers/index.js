import { combineReducers } from 'redux';
import test from './test'
import viewCopy from './viewCopy'
import postCopy from './postCopy'
import loginHandler from './loginHandler'
import signupHandler from './signupHandler'
import listcopy from './listcopy'


export default combineReducers({
    test,
    viewCopy,
    postCopy,
    loginHandler,
    signupHandler,
    listcopy
})