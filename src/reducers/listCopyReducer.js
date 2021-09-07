import { LISTUP_COPIES } from '../actions'

// let initialState = {
//     contentsList:[{title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:0},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:1},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:2},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:3},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:4},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:5},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:6},
//     {title:'test', writer:'test', content:'content', likeCount:0, category:'test', id:7}]
// }

let initialState = {contentsList:[]}

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