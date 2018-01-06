import { connect } from 'react-redux';
import actions from '../../actions';

export default connect(
  (state, ownProps) => ({ story: state.stories[ownProps.storyId] }),
  (dispatch, ownProps) => ({
    like: () => dispatch(actions.likeStory(ownProps.storyId)),
  }),
);
