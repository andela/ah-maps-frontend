import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.sass';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { messageChanger, errorMessage } from '../../redux/actions';
import Message from '../../components/ForgotPassword';

const emailRegex = require('email-regex');

class ForgotPasswordForm extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',

    };
  }

    handleChange = (e) => {
      this.setState({
        email: e.target.value,
      });
    }

    handleResetPasswordSubmit = (e) => {
      // stop browser's default behaviour of reloading on form submit
      e.preventDefault();
      const { changeMessage, showErrorMessage } = this.props;
      const { email } = this.state;
      changeMessage({ email }).catch((response) => {
        showErrorMessage(response.response.data.errors[0]);
      });
    }

    render() {
      const { email } = this.state;
      const {
        success, message, visible, loading,
      } = this.props;

      const checkIfEmailIsValid = emailRegex({ exact: true }).test(email);

      return (
        <div className="box raised">
          <h1 className="title themecolor">Forgot Password</h1>
          <div className="ui divider" />

          <form className={loading ? 'ui loading form' : 'ui form'} onSubmit={this.handleResetPasswordSubmit} id="forgotpasswordform">

            <div className="field">
              <label>Email</label>
              <div className="ui input">
                <input type="text" placeholder="joe@schmoe.com" name="email" value={email} id="email" onChange={this.handleChange} />
              </div>
            </div>


            {visible && <Message success={success} message={message} />}


            <button disabled={!checkIfEmailIsValid} className="ui button themebutton" type="submit">
          Submit
            </button>
          </form>
        </div>

      );
    }
}

const matchDispatchToProps = dispatch => bindActionCreators({
  changeMessage: messageChanger,
  showErrorMessage: errorMessage,
}, dispatch);

const mapStateToProps = state => ({
  message: state.resetpassword.message,
  visible: state.resetpassword.visible,
  success: state.resetpassword.success,
  loading: state.resetpassword.loading,
});

export default connect(mapStateToProps, matchDispatchToProps)(ForgotPasswordForm);
