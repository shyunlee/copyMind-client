import { LISTUP_COPIES } from '../actions'
import fakeData from '../testData/fakeData.json'

let initialState = {
    contentsList:fakeData.result
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