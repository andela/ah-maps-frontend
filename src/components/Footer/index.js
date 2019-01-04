import React from 'react';
import './style.sass';

const Footer = () => (
  <div className="ui inverted vertical footer segment footer-style">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="three wide column">
          <h4 className="ui inverted header dark">Help</h4>
          <div className="ui inverted link list">
            <a href="#sdf" className="item blued">Getting started</a>
            <a href="#sf" className="item blued">Contact Us</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header dark">Careers</h4>
          <div className="ui inverted link list">
            <a href="#sdf" className="item blued">Authors</a>
            <a href="#sdf" className="item blued">Reviewers</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header dark">Blog</h4>
          <a href="#sdf" className="item blued">More</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
