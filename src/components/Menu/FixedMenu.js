import React from 'react';

const FixedMenu = () => (
  <div className="ui large top secondary inverted fixed hidden menu">
    <div className="ui container">
      <a href="#sdff" className="active item">TECH</a>
      <a href="#sdf" className="item">POLITICS</a>
      <a href="#sdf" className="item">RELIGION</a>
      <a href="#sdf" className="item">FASHION</a>
      <div className="right menu">
        <div className="item">
          <a href="/login">
            <span className="ui primary button ">
          Login
            </span>
          </a>

        </div>
        <div className="item">
          <a href="/signup">
            <span className="ui primary button theme-button-color">
          Sign Up
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default FixedMenu;
