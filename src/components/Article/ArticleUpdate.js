import React from 'react';
import PropTypes from 'prop-types';
import { VideoBlockConfig } from 'Dante2/package/lib/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/lib/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/lib/components/blocks/placeholder';
import { Container, Grid, Form } from 'semantic-ui-react';
import Dante from 'Dante2';
import ImageUploader from 'react-images-upload';
import Message from '../Signup/Message';
import './styles.sass';


const Article = ({ ...props }) => {
  const {
    onChange, title, body, errors,
    handleSubmit, onEditorChange,
    onImageChange, articles, loading, readOnly,
  } = props;

  return (
    <Container>
      <Grid className={loading ? 'ui loading form' : ''} columns={2} divided="vertically">
        <Grid.Row>
          <Grid.Column width={12}>
            {articles.success
             && Object.keys(articles.errors).length > 0
              && <Message errors={articles.errors} status={articles.status} />
            }
            {!articles.success
                && Object.keys(articles.errors).length > 0
                  && <Message errors={articles.errors} status={articles.status} />
                }
            <Form.Field>
              <input name="title" value={title} onChange={onChange} type="text" placeholder="Title" className="post__title" />
              {errors.title
              && <div className="ui pointing red basic label">{errors.title}</div>
              }
            </Form.Field>
            <Form.Field>
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
              )
            }
              {errors.body
              && <div className="ui pointing red basic label">{errors.body}</div>}
            </Form.Field>

          </Grid.Column>

          <Grid.Column width={4}>
            <ImageUploader
              withIcon
              buttonText="Update article image"
              onChange={onImageChange}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              withPreview
              singleImage
            />
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
