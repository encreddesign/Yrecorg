import React from 'react';
import { connect } from 'react-redux';
import { dropboxLogin } from '../store/dropbox/actions';

/**
 * @class Login
 */
class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.directToDropboxLogin();
  }

  render() {
    if(this.props.loginUrl !== undefined) {
      window.location.href = this.props.loginUrl;
    }
    
    return (
      <section></section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginUrl: state.loginUrl
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    directToDropboxLogin: () => {
      dispatch(dropboxLogin())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);