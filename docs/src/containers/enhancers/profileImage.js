import { connect } from 'react-redux';

export default connect(
  state => ({ imageSrc: state.profileImage }),
);
