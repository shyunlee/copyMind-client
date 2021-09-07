import { combineReducers } from 'redux';
import viewCopyReducer from './viewCopyReducer'
import loginReducer from './loginReducer'
import listCopyReducer from './listCopyReducer'
import myProfileReducer from './myProfileReducer'
import bookmarkListReducer from './bookmarkListReducer'


export default combineReducers({
    viewCopyReducer,
    loginReducer,
    listCopyReducer,
    myProfileReducer,
    bookmarkListReducer
})


/*
let initialState = {
    isLogin:false,
    viewCopy:{},
    contentsList:[],
    userInfo:{
        id,
        userName,
        email,
        bookmarkCount,
        postCount
    },
    
}
*/