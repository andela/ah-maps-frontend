import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { VideoBlockConfig } from 'Dante2/package/lib/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/lib/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/lib/components/blocks/placeholder';

import Dante from 'Dante2';

const ArticleEditor = (props) => {
  const {
    onEditorChange, readOnly,
    errors,
  } = props;
  return (
    <Form.Field>
      <Dante
        data_storage={{
          interval: 1000,
          url: '#/',
          method: 'POST',
          save_handler: onEditorChange,
        }}
        content={null}
        body_placeholder="Write your story here"
        read_only={readOnly}
        widgets={[
          VideoBlockConfig(),
          EmbedBlockConfig(),
          PlaceholderBlockConfig(),
        ]}
      />
      {errors.body
        && <div className="ui pointing red basic label">{errors.body}</div>}
    </Form.Field>
  );
};

ArticleEditor.propTypes = {
  onEditorChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default ArticleEditor;
