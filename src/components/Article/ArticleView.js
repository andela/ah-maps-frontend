import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Container, Image, Button,
} from 'semantic-ui-react';
import Dante from 'Dante2';
import { ARTICLE_IMAGE } from '../../constants';
import './articleView.sass';
import UserCard from '../Card/UserCard';
import { isOwner } from '../../utils/permissions';

const ArticleView = ({ ...props }) => {
  const {
    article, redirect,
    deleteArticle, confirmDelete,
    show, loading,
  } = props;
  const {
    title, image, body, author,
  } = article;
  return (
    <Container>
      <Grid className={loading ? 'ui loading form' : ''}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="article" role="presentation">
              <div className="article__view__content">
                <h1 className="article__view__header">
                  {title}
                  &nbsp;&nbsp;
                  {isOwner(author.username) && <Button onClick={redirect} content="Edit" className="ui large teal button float-right" />}
                  {isOwner(author.username) && show && <Button onClick={deleteArticle} color="red" content="Confirm Delete" className="ui large danger button float-right" />}
                  {isOwner(author.username) && !show && <Button onClick={confirmDelete} color="orange" content="Delete" className="ui large danger button float-right" />}
                </h1>
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
            {body ? (
              <div>
                <Dante
                  content={{
                    blocks: JSON.parse(body),
                    entityMap: {},
                  }}
                  read_only
                />
              </div>
            ) : <div />}
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
  redirect: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

ArticleView.defaultProps = {
  title: '',
  body: '',
  image: ARTICLE_IMAGE,
  author: { followers: [], username: '' },
  readingTime: '',
};
export default ArticleView;
