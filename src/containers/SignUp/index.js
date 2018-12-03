import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '../../components/elements';
import { testEmail, passwordRegex } from '../../utils';
import { SignUpRequest } from '../../redux/actions';
import Error from './Errors';

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
      const { register } = this.props;
      register({ ...this.state });
    }
  }

  render() {
    const { signup } = this.props;
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
      <div className="wrapper ui middle align center">
        <div className=" ui raised very padded center aligned text container segment container-main">
          <div className="column">
            <h1 className="ui header">Sign Up</h1>
            <br />
            {Object.keys(signup.errors).length > 0
              && <Error errors={signup.errors} />
            }
            <form onSubmit={this.handleSubmit} id="signup-form">
              { inputs.map(input => (
                <React.Fragment key={input.name}>
                  <Input {...input} />
                  <br />
                </React.Fragment>
              ))}

              <div className="actions">
                <button className="ui large teal button" type="submit">Sign Up</button>
              </div>
            </form>
            <br />
            <div className="container">
              <div className="ui horizontal divider">
            Or
              </div>
            </div>
            <br />
            <div className="container">
              <button type="button" className="ui circular facebook icon button">
                <i className="facebook icon" />
              </button>
              <button type="button" className="ui circular twitter icon button">
                <i className="twitter icon" />
              </button>
              <button type="button" className="ui circular google plus icon button">
                <i className="google plus icon" />
              </button>
            </div>
            <br />
            <p>
  Already have an account?
              {' '}
              <Link to="login">Login</Link>
            </p>
          </div>
        </div>
      </div>

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
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);