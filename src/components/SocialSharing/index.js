import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import '../../assets/styles/scss/index.sass';

const ShareButtons = ({ ...props }) => {
  const { title } = props;
  return (
    <div className="social-share">
      <FacebookShareButton
        url={window.location.href}
        quote={title}
        hashtag="#AuthorsHaven"
      >
        <FacebookIcon round size={32} />
      </FacebookShareButton>
      <WhatsappShareButton
        url={window.location.href}
        title={title}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton
        url={window.location.href}
        title={title}
        hashtags={['AuthorsHaven']}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        url={window.location.href}
        subject={title}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <TelegramShareButton
        url={window.location.href}
        title={title}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
};

ShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ShareButtons;
