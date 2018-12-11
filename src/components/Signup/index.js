import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../elements/Input';
import { SocialAuth } from '../SocialButtons';
import Message from './Message';
import LikeButton from '../../containers/LikeButtons';


const SignupForm = ({ ...props }) => {
  const {
    signup, inputs, handleSubmit, loading, ...rest
  } = props;

  return (
    <div className=" ui raised very padded center aligned text container segment container-main">
      <h1 className="ui header">Sign Up</h1>
      {signup.success
             && Object.keys(signup.errors).length > 0
              && <Message {...rest} errors={signup.errors} status={signup.status} />
            }
      {!signup.success
             && Object.keys(signup.errors).length > 0
              && <Message errors={signup.errors} status={signup.status} />
            }
      <form onSubmit={handleSubmit} className={loading ? 'ui loading form' : ''} id="signup-form">
        { inputs.map(input => (
          <React.Fragment key={input.name}>
            <Input {...input} />
            <br />
          </React.Fragment>
        ))}
        <button className="ui large teal button" type="submit">Sign Up</button>
      </form>
      <SocialAuth />
      <p>
  Already have an account?
        <Link to="login"> Login</Link>
      </p>
      <LikeButton />
    </div>
  );
};

export default SignupForm;
