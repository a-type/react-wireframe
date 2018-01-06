import { connect } from 'react-redux';

export default connect(
  state => ({ bio: state.bio })
);
