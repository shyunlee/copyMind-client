import {connect} from 'react-redux'
import {ListCopy} from '../components'

const mapStateToProps = (state) => {
    return {
        copyArr: state.listcopy.copyArr
    }
}



export default connect(mapStateToProps)(ListCopy)