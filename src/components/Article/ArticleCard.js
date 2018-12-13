import React from 'react';
import PropTypes from 'prop-types';
import { ARTICLE_IMAGE } from '../../constants';

const ArticleCard = ({ ...props }) => {
  const {
    title, image, author, readingTime, history, slug,
  } = props;
  const redirect = () => {
    history.push(`/article/${slug}`);
  };
  return (

    <div className="card" onClick={() => redirect()} role="presentation">

      <div className="image">
        <img alt="article" src={image || ARTICLE_IMAGE} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <div className="ui star rating" data-rating="4" data-max-rating="5" />
        </div>
        <div className="description">
          {author.username}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          {readingTime}
        </span>
        <span className="float-left">
          <i className="user icon" />
          {author.followers.length}
          {' '}
Followers
        </span>
      </div>

    </div>


  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  history: PropTypes.func.isRequired,
};

ArticleCard.defaultProps = {
  image: ARTICLE_IMAGE,
};
export default ArticleCard;
