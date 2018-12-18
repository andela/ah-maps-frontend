import React from 'react';
import '../../components/Comment/styles.sass';
import PropTypes from 'prop-types';
import {
  Form, TextArea, Modal, Button,
} from 'semantic-ui-react';
import CommentUserCard from '../../components/Card/CommentUserCard';
import { api } from '../../utils/api';
import { isOwner } from '../../utils/permissions';


export class CommentsThreadCard extends React.Component {
  state = {
    editing: false,
    data: '',
    open: false,
  };

  show = size => () => {
    this.setState(prevState => ({
      delete: !prevState.delete,
    }));
    this.setState({ size, open: true });
  }

  close = () => {
    this.setState({ open: false });
  }

  componentDidMount = () => {
    const { body } = this.props;
    this.setState({ data: body });
  }


  handleChange = (e) => {
    this.setState({
      data: e.target.value,
    });
  }

  handleEditToggle =() => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
  }

  handleDelete = () => {
    const { id, refresh } = this.props;
    api.comment.delete(id);
    this.close();
    refresh();
  }

  handleEdit = () => {
    this.setState({ editing: true });
    const { data } = this.state;
    const { id, slug } = this.props;
    api.comment.editThread(slug, id, { body: data }).then(() => {
      this.handleEditToggle();
    });
  };

  render() {
    const { editing, data } = this.state;

    const {
      date,
    } = this.props;


    if (editing) {
      return (
        <div className="card comment-box">
          <div className="content">
            <Form>
              <Form.Field>
                <TextArea autoHeight placeholder="Try adding multiple lines" value={data} onChange={this.handleChange} />
              </Form.Field>
              <button type="submit" className="ui medium teal button" onClick={this.handleEdit}>Edit Reply</button>
              <button
                className="ui medium secondary button"
                onClick={this.handleEditToggle}
                type="button"
              >
            Cancel
              </button>
            </Form>
          </div>
        </div>
      );
    }
    if (!editing) {
      const { open, size } = this.state;
      const { author } = this.props;
      return (
        isOwner(author.username) ? (
          <div className="comment-wrapper">
            <div className="card comment-thread" role="presentation">
              <CommentUserCard author={author} date={date} />
              <div className="content">
                <div className="description-thread" />
                {data}
              </div>
              <div className="extra content thread-content">
                <span onClick={this.handleEditToggle}>
                  <i className="edit icon" />
            &nbsp;&nbsp;Edit
                </span>
                <span>&nbsp;&nbsp;</span>
                <span onClick={this.show('small')}>
                  <i className="trash icon" />
            &nbsp;&nbsp;Delete
                </span>
                <span>&nbsp;&nbsp;</span>
              </div>
              <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>Delete Your Comment</Modal.Header>
                <Modal.Content>
                  <p>Are you sure you want to delete your reply</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button secondary onClick={this.close}>No</Button>
                  <Button className="ui medium teal button" icon="checkmark" labelPosition="right" content="Yes" onClick={this.handleDelete} />
                </Modal.Actions>
              </Modal>
            </div>
          </div>

        )
          : (
            <div className="comment-wrapper">
              <div className="card comment-thread" role="presentation">
                <CommentUserCard author={author} date={date} />
                <div className="content">
                  <div className="description-thread" />
                  {data}
                </div>
                <div className="extra content">
                  <span>&nbsp;&nbsp;</span>
                </div>
              </div>
            </div>

          ));
    }
  }
}

CommentsThreadCard.propTypes = {
  body: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.instanceOf.isRequired,
  refresh: PropTypes.func.isRequired,
  author: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
};

export default CommentsThreadCard;
