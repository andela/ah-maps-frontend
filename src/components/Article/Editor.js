import React from 'react';
import PropTypes from 'prop-types';
import Dante from 'Dante2';

function Editor(props) {
  const { body } = props;
  return body ? (
    <div>
      <Dante
        content={{
          blocks: JSON.parse(body),
          entityMap: {},
        }}
        read_only
      />
    </div>
  ) : <div />;
}

Editor.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Editor;
