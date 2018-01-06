import { connect } from 'react-redux';

export default connect(
  state => ({
    suggestions: state.suggestions,
  }),
);
