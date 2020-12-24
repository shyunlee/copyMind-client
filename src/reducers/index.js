import { combineReducers } from 'redux';
import test from './test'
import viewCopy from './viewCopy'
import postCopy from './postCopy'

export default combineReducers({
    test,
    viewCopy,
    postCopy
})