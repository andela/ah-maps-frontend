import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Image } from 'semantic-ui-react';
import { ARTICLE_IMAGE } from '../../constants';
import './articleView.sass';
import UserCard from '../Card/UserCard';

const ArticleView = ({ ...props }) => {
  const { article } = props;
  const {
    title, image, body,
  } = article;
  return (
    <Container>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="article" role="presentation">
              <div className="article__view__content">
                <h1 className="article__view__header">{title}</h1>
                <UserCard {...article} readingTime={article.reading_time} />
              </div>
            </div>

          </Grid.Column>
          {image
          && (
          <Grid.Column className="featured-image">
            <Image src={image || ARTICLE_IMAGE} />
          </Grid.Column>
          )
          }
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            {body}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

  );
};

ArticleView.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.shape({}),
  article: PropTypes.shape({}).isRequired,
  readingTime: PropTypes.string,
};

ArticleView.defaultProps = {
  title: '',
  body: '',
  image: ARTICLE_IMAGE,
  author: { followers: [] },
  readingTime: '',
};
export default ArticleView;
