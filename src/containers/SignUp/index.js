import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testEmail, passwordRegex, usernameRegex } from '../../utils';
import { SignUpRequest, signUpError } from '../../redux/actions';
import SignupForm from '../../components/Signup';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    errors: {},
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { errors } = this.state;
    delete errors[name];
    this.setState({
      [name]: value,
      errors,
    });
  };

  validate = () => {
    const {
      username,
      email,
      password,
      confirmPassword,
    } = this.state;
    const { errors } = this.state;

    if (password === '') errors.password = 'Password required';
    if (!passwordRegex.test(password)) errors.password = 'Password should contain at least 8 charaters, a letter and a number';
    if (username === '') errors.username = 'Username required';
    if (!usernameRegex.test(username)) errors.username = 'Invalid username';
    if (email === '') errors.email = 'Email required';
    if (!testEmail.test(email)) errors.email = 'Please enter a valid email';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;
    if (isValid) return true;
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      const { register, registerError, history } = this.props;
      register({ ...this.state })
        .then(
          setTimeout(() => history.push('/login'), 3000),
        )
        .catch((error) => {
          let issue = {};
          if (error.message === 'Network Error') {
            issue = { error: 'Network error' };
          } else {
            try {
              issue = error.response.data.errors;
            } catch (err) { issue = { ...issue }; }
          }
          issue = issue === 'undefined' ? {} : issue;
          registerError(issue);
        });
    }
  }

  render() {
    const { signup, ...rest } = this.props;
    const {
      username, password, email, confirmPassword, errors,
    } = this.state;
    const inputs = [
      {
        label: 'Username',
        value: username,
        name: 'username',
        id: 'username',
        type: 'text',
        icon: 'user outline',
        placeholder: 'Username',
        errors: errors.username,
        onChange: this.onChange,
      },
      {
        label: 'Email',
        value: email,
        name: 'email',
        id: 'email',
        type: 'email',
        icon: 'mail outline',
        placeholder: 'Email',
        errors: errors.email,
        onChange: this.onChange,
      },
      {
        label: 'Password',
        value: password,
        name: 'password',
        id: 'password',
        type: 'password',
        icon: 'lock',
        placeholder: 'Password',
        errors: errors.password,
        onChange: this.onChange,
      },
      {
        label: 'Confirm Password',
        value: confirmPassword,
        name: 'confirmPassword',
        id: 'confirmPassword',
        type: 'password',
        icon: 'lock',
        placeholder: 'Confirm Password',
        errors: errors.confirmPassword,
        onChange: this.onChange,
      },
    ];
    return (
      <SignupForm
        inputs={inputs}
        handleSubmit={this.handleSubmit}
        signup={signup}
        {...rest}
      />
    );
  }
}

// Get apps state and pass it as props to Container data
const mapStateToProps = state => ({
  signup: state.signup,
});

// Get actions and pass them as props
const matchDispatchToProps = dispatch => bindActionCreators({
  register: SignUpRequest,
  registerError: signUpError,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
