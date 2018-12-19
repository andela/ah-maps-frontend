import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Container, Image, Button, Icon,
} from 'semantic-ui-react';
import Dante from 'Dante2';
import { ARTICLE_IMAGE } from '../../constants';
import './articleView.sass';
import UserCard from '../Card/UserCard';
import { isOwner } from '../../utils/permissions';
import LikeButton from '../../containers/LikeButtons';
import ShareButtons from '../SocialSharing';
import '../../assets/styles/scss/index.sass';
import TagList from '../../containers/Tag/tagList';

const ArticleView = ({ ...props }) => {
  const {
    article, redirect, deleteArticle,
    confirmDelete, show, loading,
  } = props;

  const {
    title, image, body, author,
  } = article;
  return (
    <Container>
      <Grid className={loading ? 'ui loading form article-container ' : 'article-container '}>
        <Grid.Row>
          <div className="article__actions w-100">
            {isOwner(author.username) && <Icon size="big" onClick={redirect} className="float-right" name="edit outline" title="Edit" />}
            &nbsp;&nbsp;
            {isOwner(author.username) && show
            && (
            <Button className="float-right" color="orange">
              <Icon onClick={deleteArticle} inverted name="trash alternate outline" title="Confirm Delete" />
              Confirm Delete
            </Button>
            )}
            &nbsp;&nbsp;
            {isOwner(author.username) && !show && <Icon size="big" onClick={confirmDelete} className="float-right" color="orange" name="trash alternate outline" content="confirm" title="Delete" />}
          </div>
        </Grid.Row>
        <Grid.Row columns={image ? 2 : 1}>
          <Grid.Column>
            <div className="article" role="presentation">
              <div className="article__view__content">
                <h1 className="article__view__header">
                  {title}
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
          )}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="article-body">
            {body ? (
              <Dante
                content={{
                  blocks: JSON.parse(body),
                  entityMap: {},
                }}
                read_only
              />
            ) : <div />}
            <hr className="hr-line" />
            <div className="ui grid top padded">
              <div className="four column row">
                <div className="right floated column">
                  <LikeButton slug={article.slug} />
                </div>
              </div>
            </div>
          </Grid.Column>
          <div>
            <ShareButtons title={title} />
          </div>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <TagList tags={article.tags} />
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
