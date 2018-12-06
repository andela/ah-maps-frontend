import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../ForgotPassword/style.sass';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  messageChanger, showMismatch, submitNewPassword, showError, errorMessage, showSuccess,
} from '../../redux/actions';
import { passwordRegex } from '../../utils';
import Message from '../../components/ResetPassword';

class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirm: '',
    };
  }

    handleChangeOne = (e) => {
      this.setState({
        password: e.target.value,
      });
    }

    handleChangeTwo = (e) => {
      this.setState({
        confirm: e.target.value,
      });
    }

    handleResetPasswordSubmit = (e) => {
      // stop browser's default behaviour of reloading on form submit
      e.preventDefault();
      const { password, confirm } = this.state;
      const {
        showErrors, showErrorMessage, submitPassword,
      } = this.props;
      const checkPasswordValidity = passwordRegex.test(password);

      if (checkPasswordValidity) {
        showErrors();
      }

      const { token } = this.props.match.params;
      const result = password.localeCompare(confirm);

      if (result !== 0) {
        this.props.showNotMatch();
      } else if (!checkPasswordValidity) {
        showErrors();
      } else {
        submitPassword({ token, password }, () => setTimeout(() => { this.props.history.push('/login'); }, 2000))
          .catch((response) => {
            showErrorMessage(response.response.data.user.message);
          });
      }
    }

    render() {
      const { password, confirm } = this.state;
      const {
        success, message, visible, loading, matching,
      } = this.props;

      return (

        <div className="box raised">
          <h1 className="title themecolor">Reset Password</h1>
          <div className="ui divider" />
          <form className={loading ? 'ui loading form' : 'ui form'} onSubmit={this.handleResetPasswordSubmit} id="resetpasswordform">

            <div className="field">
              <label>New Password</label>
              <div className="ui input">
                <input type="password" onChange={this.handleChangeOne} name="password" value={password} id="password" />
              </div>
            </div>

            <div className={password ? 'field' : 'disabled field'}>
              <label>Confirm</label>
              <div className="ui input">
                <input type="password" onChange={this.handleChangeTwo} name="confirm" value={confirm} id="confirm" />
              </div>
            </div>


            {visible && <Message success={success} message={message} matching={matching} />}


            <button className="ui button themebutton" type="submit">
          Submit
            </button>
          </form>
        </div>

      );
    }
}

const matchDispatchToProps = dispatch => bindActionCreators({
  changeMessage: messageChanger,
  showNotMatch: showMismatch,
  submitPassword: submitNewPassword,
  showErrors: showError,
  showErrorMessage: errorMessage,
  showSuccessMessage: showSuccess,
}, dispatch);

const mapStateToProps = state => ({
  message: state.resetpassword.message,
  visible: state.resetpassword.visible,
  success: state.resetpassword.success,
  loading: state.resetpassword.loading,
  matching: state.resetpassword.matching,
});

ResetPasswordForm.propTypes = {
  showErrors: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, matchDispatchToProps)(ResetPasswordForm);
