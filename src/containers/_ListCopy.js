import {connect} from 'react-redux'
import {ListCopy} from '../components'

const mapStateToProps = (state) => {
    return {
        contentsList: state.listCopyReducer.contentsList
    }
}



export default connect(mapStateToProps)(ListCopy)