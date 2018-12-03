import React from 'react';
import { Divider } from 'semantic-ui-react';

const SocialButtons = () => (
  <div>
    <Divider horizontal>Or</Divider>
    <br />
    <button type="button" className="ui circular facebook icon button">
      <i className="facebook icon" />
    </button>
    <button type="button" className="ui circular twitter icon button">
      <i className="twitter icon" />
    </button>
    <button type="button" className="ui circular google plus icon button">
      <i className="google plus icon" />
    </button>
    <br />
  </div>
);

export default SocialButtons;
