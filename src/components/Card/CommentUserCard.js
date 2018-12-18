import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Image } from 'semantic-ui-react';
import { PROFILE_AVATAR } from '../../constants';
import './UserCard.sass';

const Card = ({ ...props }) => {
  const {
    author, date,
  } = props;
  return (
    <Container className="header-container">
      <Grid columns={5} className="comment-header">
        <div className="user__avatar float-left comment-image">
          <Image circular src={author.image || PROFILE_AVATAR} />
        </div>
        <div className="float-left user__details">
          <div>
            {author.username}
          </div>
          <div className="text-muted">
            <span>{date}</span>
&nbsp;&nbsp;
          </div>

        </div>
      </Grid>
    </Container>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  author: PropTypes.shape({}),
  date: PropTypes.string,
  readingTime: PropTypes.string,
};
Card.defaultProps = {
  image: PROFILE_AVATAR,
  author: { username: '', image: PROFILE_AVATAR },
  readingTime: '',
  date: '',
};

export default Card;
