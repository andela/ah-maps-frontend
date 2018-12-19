import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Image } from 'semantic-ui-react';
import { PROFILE_AVATAR } from '../../constants';
import './UserCard.sass';
import FollowButton from '../FollowButton';

const Card = ({ ...props }) => {
  const {
    author, date, readingTime, ...rest
  } = props;
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <div className="user__avatar float-left">
            <Image circular src={author.image || PROFILE_AVATAR} />
          </div>
          <div className="float-left user__details">
            <div className="author-container">
              <div className="float-left username">
                {author.username}
              </div>

              <div className="float-left follow">
                <div className="follow">
                  {author
                 && <FollowButton className="ui primary button" author={author} {...rest} />
                }

                </div>
              </div>
              <br />
            </div>
            <div className="text-muted">
              <div className="float-left username">
                <span>{date}</span>
              </div>
              <div className="float-left username">
                <span>{readingTime}</span>
              </div>
            </div>

          </div>
        </Grid.Row>
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
