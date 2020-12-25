import {SIGNUP} from '../actions'

const initialState = {
    signup:false,
    errorMessage:false
}

const signupHandler = (state = initialState, action) => {
    switch(action.type){
        case SIGNUP:
            return Object.assign({},state,{
                signup: action.signup,
                errorMessage: action.errorMessage
            })
        default : 
            return state;
    }

}

export default signupHandler