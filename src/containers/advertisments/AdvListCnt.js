import { connect } from 'react-redux'
import AdvList from '../../components/advertisments/AdvList'
import { getAdv_request, deleteAdv_success } from '../../actions/adv.action';

const mapStateToProps = state => ({
    advs: state.advReducer.advs
})

const mapDispatchToProps = dispatch => ({
    getAdvs: () => dispatch(getAdv_request()),
    deleteAdv: (adv) => dispatch(deleteAdv_success(adv))
})

const AdvListCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(AdvList)

export default AdvListCnt