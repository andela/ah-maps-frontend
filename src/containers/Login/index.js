import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LogInRequest } from '../../redux/actions/login';
import LoginForm from '../../components/Login';

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

  renderMessage = () => (
    <div className={this.props.success ? 'ui floating message success' : 'ui floating message error'}>
      { this.props.message }
    </div>
  )

  onSubmit = (e) => {
    e.preventDefault();
    const { signin } = this.props;
    signin({ ...this.state });
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
      },
      {
        name: 'password',
        value: password,
        id: 'password',
        type: 'password',
        icon: 'lock',
        placeholder: 'Enter password',
        onChange: this.onChange,
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
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Login);
