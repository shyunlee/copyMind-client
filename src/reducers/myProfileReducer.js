import {GET_USER_INFO} from '../actions'

const initialState = {
    userInfo:{
        id:null,
        userName:'',
        email:'',
        bookmarkCount:0,
        postCount:0,
        createdAt:'',
        updatedAt:''
    }
}

const myProfileReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return Object.assign({},state, {userInfo:action.userInfo})
        default:
            return state
    }
}



export default myProfileReducer