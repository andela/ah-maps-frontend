import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../elements';
import SocialButtons from '../SocialButtons';
import './style.sass';

const LoginForm = ({ ...props }) => {
  const {
    loginInputs, onSubmit, visible, renderMessage, ...rest
  } = props;

  return (
    <div className="ui raised very padded center aligned text container segment container-main">
      <h1 className="ui header">Log in</h1>
      <br />
      {visible && renderMessage()
          }
      <form className="ui form" id="login-form" onSubmit={onSubmit}>
        { loginInputs.map(input => (
          <React.Fragment key={input.name}>
            <Input {...input} />
            <br />
          </React.Fragment>
        ))}
        <a href="/forgot-password">Forgot password?</a>
        <br />
        <br />
        <button type="submit" className="ui large teal button">Login</button>
        <br />
        <SocialButtons {...rest} />
        <p>
Don&apos;t have an account?
          <Link to="signup"> Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
