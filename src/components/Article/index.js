import React from 'react';
import { ImageBlockConfig } from 'Dante2/package/es/components/blocks/image';
import { VideoBlockConfig } from 'Dante2/package/es/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/es/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/es/components/blocks/placeholder';
import { Container, Grid, Form } from 'semantic-ui-react';
import Dante from 'Dante2';
import './styles.sass';


const Article = ({ ...props }) => {
  const {
    onChange, title, body, handleSubmit, changeDem, handleUpload

  } = props;

  return (
    <Container>
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <input name="title" value={title} onChange={onChange} type="text" placeholder="Title" className="post__title" />
              </Form.Field>
              <Form.Field>
                <Dante
                  data_storage={{
                    interval: 1000,
                    url: '#/',
                    method: 'POST',
                    save_handler: changeDem,
                  }}
                  content={body}
                  body_placeholder="Write your story here"
                  read_only={false}
                  widgets={[
                    ImageBlockConfig({
                      options: {
                        upload_url: '#/',
                        upload_callback: handleUpload,
                        upload_handler: handleUpload,
                      },
                    }),
                    VideoBlockConfig(),
                    EmbedBlockConfig(),
                    PlaceholderBlockConfig(),
                  ]}
                />
              </Form.Field>
              <button className="ui large teal button" type="submit">Publish</button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Article;
