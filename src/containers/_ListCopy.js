import {connect} from 'react-redux'
import {ListCopy} from '../components'
import {actionGetRandomCopy} from '../actions'

const mapStateToProps = (state) => {
    return {
        contentsList: state.listCopyReducer.contentsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendCopyToState: (data) => {
            dispatch(actionGetRandomCopy(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCopy)