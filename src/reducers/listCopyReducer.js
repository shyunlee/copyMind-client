import { LISTUP_COPIES } from '../actions'

let initialState = {
    contentsList:[{title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:0}]
}

const listcopy = (state = initialState, action) => {
    switch(action.type){
        case LISTUP_COPIES :
            return Object.assign({},state, {
                contentsList:action.copyArr
            })
        default : 
            return state;
    }
    
}

export default listcopy;