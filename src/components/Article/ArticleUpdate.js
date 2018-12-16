import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import { VideoBlockConfig } from 'Dante2/package/lib/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/lib/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/lib/components/blocks/placeholder';

import Dante from 'Dante2';

import ServerMessage from './ServerMessage';
import ArticleTitle from './ArticleTitle';
import ArticleImage from './ArticleImage';

import './styles.sass';


const Article = ({ ...props }) => {
  const {
    errors, title, body,
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
            {title !== ''
              && (
              <Dante
                data_storage={{
                  interval: 1000,
                  url: '#/',
                  method: 'POST',
                  save_handler: onEditorChange,
                }}
                content={body}
                body_placeholder="Write your story here"
                read_only={readOnly}
                widgets={[
                  VideoBlockConfig(),
                  EmbedBlockConfig(),
                  PlaceholderBlockConfig(),
                ]}
              />
              )}
            {errors.body
        && <div className="ui pointing red basic label">{errors.body}</div>}
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
