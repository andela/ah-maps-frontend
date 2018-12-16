import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

import ServerMessage from './ServerMessage';
import ArticleTitle from './ArticleTitle';
import ArticleImage from './ArticleImage';
import ArticleEditor from './ArticleEditor';
import './styles.sass';


const Article = ({ ...props }) => {
  const {
    errors,
    handleSubmit, onEditorChange,
    onImageChange, articles, loading, readOnly,
  } = props;

  return (
    <Container>
      <Grid className={loading ? 'ui loading form' : ''} columns={2} divided="vertically">
        <Grid.Row>
          <Grid.Column width={12}>
            <ServerMessage articles={articles} />
            <ArticleTitle {...props} />
            <ArticleEditor
              errors={errors}
              onEditorChange={onEditorChange}
              readOnly={readOnly}
            />
          </Grid.Column>

          <Grid.Column width={4}>
            <ArticleImage onImageChange={onImageChange} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <button onClick={handleSubmit} className="ui large teal button" type="submit">Publish</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onEditorChange: PropTypes.func.isRequired,
  articles: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default Article;
