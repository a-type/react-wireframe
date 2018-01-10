import { connect } from 'react-redux';
import actions from '../../actions';

export default connect(
  state => ({ bio: state.bio, name: state.name, followed: state.followed }),
  dispatch => ({ follow: () => dispatch(actions.follow()) }),
);
