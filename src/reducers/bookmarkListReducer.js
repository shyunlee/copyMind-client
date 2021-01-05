import { UPDATE_BOOKMARK_LIST } from '../actions'

let initialState = {
    bookmarkList:[]
}

const bookmarkListReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_BOOKMARK_LIST:
            return Object.assign({}, state, {bookmarkList:action.bookmarkList})
        default:
            return state
    }
}

export default bookmarkListReducer;