import { connect } from 'react-redux';
import actions from '../../actions';

export default connect(
  state => ({
    storyIds: Object.keys(state.stories || {}),
  }),
);
