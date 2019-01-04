import React from 'react';
import PropTypes from 'prop-types';
import { ARTICLE_IMAGE } from '../../constants';
import Rating from '../../containers/Rating';
import './styles.sass';

const ArticleCard = ({ ...props }) => {
  const {
    title, image, author, readingTime, history, slug, rating, refresh,
  } = props;
  const redirect = () => {
    history.push(`/article/${slug}`);
  };
  return (

    <div className="card shadow" role="presentation">

      <div className="article image" onClick={() => redirect()} role="presentation">
        <img alt="article" src={image || ARTICLE_IMAGE} />
      </div>
      <div className="content">
        <div className="header" onClick={() => redirect()} role="presentation">{title}</div>
        <div className="meta">
          <div className="ui star rating" data-rating="4" data-max-rating="5" />
        </div>
        <div className="description">
          {author.username}
        </div>
      </div>
      <Rating slug={slug} title={title} rating={rating || 0} refresh={refresh} username={author.username} />
      <div className="extra content">
        <span className="right floated">
          {readingTime}
        </span>
        <span className="float-left" />
      </div>

    </div>


  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.shape({}).isRequired,
  readingTime: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  rating: PropTypes.number,
  refresh: PropTypes.func.isRequired,
};

ArticleCard.defaultProps = {
  image: ARTICLE_IMAGE,
  rating: 0,
};
export default ArticleCard;
