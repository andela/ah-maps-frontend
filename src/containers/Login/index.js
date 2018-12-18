import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../../components/Login';
import { setToken, removeToken } from '../../utils';
import {
  loginError, loginSuccess, removeMessage, LogInRequest,
} from '../../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;
    delete errors[name];
    this.setState({
      [name]: value,
      errors,
    });
  };

  renderMessage = () => {
    const { success, message } = this.props;
    return (
      <div className={success ? 'ui floating message success' : 'ui floating message error'}>
        { message }
      </div>
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { signin, signInSuccess, signInError, clearMessage, history } = this.props;
    removeToken();
    signin({ ...this.state }).then((response) => {
      signInSuccess(response.data.user);
      setToken(response.data);
      setTimeout(() => {
        clearMessage();
        history.push('/');
      }, 3000);
    })
      .catch((error) => {
        let issue = {};
        if (error.message === 'Network Error') {
          issue = { error: 'Network error' };
        } else {
          issue = error.response.data.errors;
        }
        signInError(issue.error);
        setTimeout(() => { clearMessage(); }, 5000);
      });
  }

  render() {
    const { login, visible } = this.props;
    const { email, password } = this.state;
    const loginInputs = [
      {
        name: 'email',
        value: email,
        id: 'email',
        type: 'text',
        icon: 'mail outline ',
        placeholder: 'Enter email address',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'password',
        value: password,
        id: 'password',
        type: 'password',
        icon: 'lock',
        placeholder: 'Enter password',
        onChange: this.onChange,
        required: 'required',
      },
    ];
    return (
      <LoginForm
        loginInputs={loginInputs}
        onSubmit={this.onSubmit}
        renderMessage={this.renderMessage}
        visible={visible}
        login={login}
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.login.message,
  login: state.login,
  visible: state.login.visible,
  success: state.login.success,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  signin: LogInRequest,
  signInSuccess: loginSuccess,
  signInError: loginError,
  clearMessage: removeMessage,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Login);
