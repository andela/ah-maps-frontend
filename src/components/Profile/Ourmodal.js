import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Header, Modal, Form,
} from 'semantic-ui-react';
import ImageUpLoader from 'react-images-upload';
import Avatar from './Avatar';
import { AVATAR } from '../../constants';
import { getToken } from '../../utils/auth';
import { updateImage, saveProfile, getProfile } from '../../redux/actions';

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: getToken().username,
      bio: '',
      avatar: '',
      showUploadImage: false,
      open: false,
    };
  }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }

    componentDidMount = () => {
      this.setState({
        avatar: AVATAR,
        imageFile: null,
      });
    }

    show = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    showUpload = () => {
      console.log('uploading...');
      this.setState({ ...this.state, showUploadImage: true });
    };

    onDrop = (picture) => {
      const { editImage } = this.props;
      this.setState({
        ...this.state,
        avatarFile: picture[picture.length - 1],
        showUploadImage: false,
      });
      console.log('this is it now', picture[0]);
      this.setState({ imageFile: picture[0] });
      editImage(picture[0]);
    };

    handleSubmit = (e) => {
      this.close();
      e.preventDefault();
      const {
        editprofile,
      } = this.props;
      const { bio, username, imageFile } = this.state;

      const formData = new FormData();
      if (imageFile) formData.append('image_file', imageFile);
      formData.append('bio', bio);
      editprofile(username, formData).then((response) => {
        saveProfile(response);
      });
      const { fetchProfile } = this.props;
      fetchProfile(username);
    }

    render() {
      const { username, bio, avatar } = this.state;
      const { profile } = this.props;
      const imageUpload = this.state.showUploadImage ? (
        <ImageUpLoader
          withIcon
          buttonText="Add an image"
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png']}
          maxFileSize={5242880}
        />
      ) : null;
      const { open } = this.state;

      return (
        <div>

          <Button onClick={() => this.show()}>Edit Profile</Button>
          <Modal open={open} onClose={this.close}>
            <Modal.Content image>
              <Avatar wrapped size="medium" source={profile.image || avatar} />
              <span onClick={this.showUpload} title="Edit Profile Picture?" className="editAvatarIcon">
                &#9998;
              </span>
              {imageUpload}
              <Modal.Description id="open-modal">
                <Header>Update Profile:</Header>
                <Form id="update-form" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Field>
                      <label>Username</label>
                      <input placeholder={username} name={username} value={username} id="username" disabled />
                    </Form.Field>
                  </Form.Group>
                  <Form.TextArea label="bio" name="bio" id="bio" value={bio} rows={4} placeholder="Tell us about yourself..." onChange={this.handleChange} />
                  <Form.Button id="submit-btn" content="Update" />
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      );
    }
}
const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
});

const mapDispatchToProps = {
  editImage: updateImage,
  editprofile: saveProfile,
  fetchProfile: getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
