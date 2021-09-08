import {connect} from 'react-redux'
import {MyProfile} from '../components'

const mapStateToProps = (state) => {
    return {
        userInfo: state.myProfileReducer.userInfo
    }
}



export default connect(mapStateToProps)(MyProfile)