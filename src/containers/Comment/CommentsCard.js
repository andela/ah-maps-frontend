import React from 'react';
import '../../components/Comment/styles.sass';
import {
  Form, TextArea, Modal, Button,
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentUserCard from '../../components/Card/CommentUserCard';
import { isOwner } from '../../utils/permissions';
import {
  getComments, deleteComments, editComments, createThread,
} from '../../redux/actions';


export class CommentsCard extends React.Component {
  state = {
    editing: false,
    data: '',
    reply: '',
    openDelete: false,
    openReply: false,
    replying: false,
  };

  showDeleteModal = size => () => {
    this.setState(prevState => ({
      delete: !prevState.delete,
    }));
    this.setState({ size, openDelete: true });
  }

  closeDeleteModal = () => {
    this.setState({ openDelete: false });
  }

  showReplyModal = size => () => {
    this.setState(prevState => ({
      replying: !prevState.replying,
    }));
    this.setState({ size, openReply: true });
  }

  closeReplyModal = () => {
    this.setState({ openReply: false });
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

  handleReplyToggle = () => {
    this.setState(prevState => ({
      replying: !prevState.replying,
    }));
  }

  handleEditToggle =() => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
  }

  handleDelete = () => {
    const { id, removeComment } = this.props;
    removeComment(id);
    this.closeDeleteModal();
  }

  handleEdit = () => {
    this.setState({ editing: true });
    const { data } = this.state;
    const { id, editcomment } = this.props;
    editcomment(id, { body: data }).then(() => {
      this.handleEditToggle();
    });
  };

  handleReply = () => {
    const {
      slug, id, refresh, createthread,
    } = this.props;
    const { reply } = this.state;
    createthread(slug, id, { body: reply }).then(() => {
      refresh();
      this.closeReplyModal();
    });
  }

  handleReplyChange = (e) => {
    this.setState({
      reply: e.target.value,
    });
  }

  render() {
    const { editing, data } = this.state;

    const {
      author, date,
    } = this.props;

    if (editing) {
      return (
        <div className="card comment-box">
          <div className="content">
            <Form>
              <Form.Field>
                <TextArea autoHeight placeholder="Try adding multiple lines" value={data} onChange={this.handleChange} />
              </Form.Field>
              <button type="submit" className="ui medium teal button" onClick={this.handleEdit}>Edit Comment</button>
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

    const { openDelete, openReply, size } = this.state;
    return (
      isOwner(author.username) ? (
        <div className="card comment-box" role="presentation">
          <CommentUserCard author={author} date={date} />
          <div className="content">
            <div className="description" />
            {data}
          </div>
          <div className="extra content">
            <span onClick={this.handleEditToggle}>
              <i className="edit icon" />
            &nbsp;&nbsp;Edit
            </span>
            <span>&nbsp;&nbsp;</span>
            <span onClick={this.showDeleteModal('small')}>
              <i className="trash icon" />
            &nbsp;&nbsp;Delete
            </span>
            <span>&nbsp;&nbsp;</span>
            <span onClick={this.showReplyModal('small')}>
              <i className="reply icon" />
            &nbsp;&nbsp;Reply
            </span>
            <div />
            <Modal size={size} open={openDelete} onClose={this.closeDeleteModal}>
              <Modal.Header>Delete Your Comment</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete your comment</p>
              </Modal.Content>
              <Modal.Actions>
                <Button secondary onClick={this.closeDeleteModal}>No</Button>
                <Button className="ui medium teal button" icon="checkmark" labelPosition="right" content="Yes" onClick={this.handleDelete} />
              </Modal.Actions>
            </Modal>
          </div>
          <div>
            <Modal size={size} open={openReply} onClose={this.closeReplyModal}>
              <Modal.Header>Reply to the Comment</Modal.Header>
              <Modal.Content>
                <Form>
                  <Form.Field>
                    <TextArea autoHeight placeholder="Type your reply here" onChange={this.handleReplyChange} />
                  </Form.Field>
                </Form>

              </Modal.Content>
              <Modal.Actions>
                <Button secondary onClick={this.closeReplyModal}>Cancel</Button>
                <Button className="ui medium teal button" icon="checkmark" labelPosition="right" content="Reply" onClick={this.handleReply} />
              </Modal.Actions>
            </Modal>
          </div>
        </div>

      )
        : (
          <div className="card comment-box" role="presentation">
            <CommentUserCard author={author} date={date} />
            <div className="content">
              <div className="description" />
              {data}
            </div>
            <div className="extra content">
              <span>&nbsp;&nbsp;</span>
              <span onClick={this.showReplyModal('small')}>
                <i className="reply icon" />
            &nbsp;&nbsp;Reply
              </span>
              <div>
                <Modal size={size} open={openReply} onClose={this.closeReplyModal}>
                  <Modal.Header>Reply to the Comment</Modal.Header>
                  <Modal.Content>
                    <Form>
                      <Form.Field>
                        <TextArea autoHeight placeholder="Type your reply here" onChange={this.handleReplyChange} />
                      </Form.Field>
                    </Form>

                  </Modal.Content>
                  <Modal.Actions>
                    <Button secondary onClick={this.closeReplyModal}>Cancel</Button>
                    <Button className="ui medium teal button" icon="checkmark" labelPosition="right" content="Reply" onClick={this.handleReply} />
                  </Modal.Actions>
                </Modal>
              </div>
            </div>
          </div>

        ));
  }
}


CommentsCard.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
  createthread: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  editcomment: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({
  comments: state.commentList,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchComments: getComments,
  removeComment: deleteComments,
  editcomment: editComments,
  createthread: createThread,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentsCard);
