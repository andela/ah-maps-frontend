import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const Card = ({ children }) => (
  <Container>
    <Grid.Row centered>
      <Grid.Column>
        <div className="ui link cards pagination__container">
          {children}
        </div>
      </Grid.Column>
    </Grid.Row>
  </Container>
);

Card.propTypes = { children: PropTypes.element.isRequired };

export default Card;
