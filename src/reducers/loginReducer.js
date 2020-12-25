import { LOGIN } from '../actions'

let initialState = {
    isLogin:false
}

const loginHandler = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return Object.assign({},state, {
                isLogin:action.isLogin
            })
        default : 
            return state;
    }
    
}

export default loginHandler;