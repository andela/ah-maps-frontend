import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const fourOfour = require('../../assets/images/404.jpg');

const PageNotFound = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Image centered size="large" src={fourOfour} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="ui text-center">
          <Link to="/">
            <div className="ui huge primary button theme-button-color">
      Home
              <i className="right arrow icon" />
            </div>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>


  </Container>
);

export default PageNotFound;
