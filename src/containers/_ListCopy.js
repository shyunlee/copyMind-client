import {connect} from 'react-redux'
import axios from 'axios'
import {ListCopy} from '../components'
import {actionGetRandomCopy, actionListupCopies, URI} from '../actions'


const mapStateToProps = (state) => {
    return {
        contentsList: state.listCopyReducer.contentsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendCopyToState: (data) => {
            dispatch(actionGetRandomCopy(data))
        }, 

        getCopyList: (pathName) => {
            return axios.post(`${URI}/copy/getcopy`,{pathName}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                dispatch(actionListupCopies(res.data.result))
                return res.data.result
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCopy)