import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Image } from 'semantic-ui-react';
import { PROFILE_AVATAR } from '../../constants';
import './UserCard.sass';

const Card = ({ ...props }) => {
  const {
    author, date, readingTime,
  } = props;
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <div className="user__avatar float-left">
              <Image circular src={author.image || PROFILE_AVATAR} />
            </div>
            <div className="float-left user__details">
              <div>
                {author.username}
              </div>
              <div className="text-muted">
                <span>{date}</span>
&nbsp;&nbsp;
                <span>{readingTime}</span>
              </div>

            </div>
          </Grid.Column>
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
  author: { username: '' },
  readingTime: '',
  date: '',
};
export default Card;
