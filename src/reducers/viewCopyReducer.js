import {GET_RANDOM_COPY, UPDATE_LIKE_COUNT} from '../actions'

const initialState = {
    viewCopy:{
        id:null,
        likeCount:0,
        title:'title',
        writer:'writer',
        content:'content',
        category:'category'
    }
}

const viewCopyReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_COPY:
            return Object.assign({}, state, {viewCopy:action.copy})
        case UPDATE_LIKE_COUNT:
            return Object.assign({}, state, {viewCopy:{...state.viewCopy, likeCount:action.count}} )
        default:
            return state
    }
}


export default viewCopyReducer;


