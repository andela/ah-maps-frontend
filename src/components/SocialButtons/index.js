import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Divider } from 'semantic-ui-react';
import { api } from '../../utils/api';
import { setToken } from '../../utils';


let provider = '';

export const responseHandler = (response) => {
  const { accessToken } = response;
  if (response.email) {
    provider = 'facebook';
  } else {
    provider = 'google-oauth2';
  }
  api.user.social({
    access_token: accessToken,
    provider,
  }).then((res) => {
    setToken(res.data);
    // TODO: Redirect to home page.
  });
};


export const SocialAuth = () => (
  <div>
    <Divider horizontal>Or</Divider>
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onSuccess={responseHandler}
      onFailure={responseHandler}
      render={renderProps => (
        <button type="button" className="ui circular google plus icon button" onClick={renderProps.onClick} id="google-btn">
          <i className="google plus icon" />
        </button>
      )}
    />
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      autoload
      fields="email,name,picture"
      callback={responseHandler}
      textButton=""
      icon="fa fa-facebook circle"
      cssClass="ui circular facebook icon button"
      id="fb-btn"
    />
  </div>
);
