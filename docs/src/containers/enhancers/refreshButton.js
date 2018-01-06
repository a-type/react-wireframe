import { connect } from 'react-redux';
import actions from '../../actions';

export default connect(
  null,
  dispatch => ({
    refresh: () => dispatch(actions.refresh()),
  }),
);
