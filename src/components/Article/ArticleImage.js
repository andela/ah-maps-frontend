import React from 'react';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';

const ArticleImage = (props) => {
  const { onImageChange } = props;
  return (
    <div>
      <ImageUploader
        withIcon
        buttonText="Choose images"
        onChange={onImageChange}
        imgExtension={['.jpg', '.gif', '.png']}
        maxFileSize={5242880} // 5 MB
        withPreview
        singleImage
      />
    </div>
  );
};

ArticleImage.propTypes = {
  onImageChange: PropTypes.func.isRequired,
};

export default ArticleImage;
