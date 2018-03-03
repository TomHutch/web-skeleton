import { connect } from 'react-redux';
import { Actions } from '../redux/store';
import Main from '../components/Main';

const mapStateToProps = state => ({
  skeletons: state.skeletons,
});

const mapDispatchToProps = dispatch => ({
  getSkeletons: () =>
    dispatch(Actions.getSkeletons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
