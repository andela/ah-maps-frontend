import React from 'react';
import '../../components/Comment/styles.sass';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentUserCard from '../../components/Card/CommentUserCard';
import { isOwner } from '../../utils/permissions';
import {
  getComments, deleteComments, editComments, createThread,
} from '../../redux/actions';
import CommentModal from '../../components/Comment/CommentReplyModal';
import CommentEditForm from '../../components/Comment/CommentEditForm';
import CommentDeleteModal from '../../components/Comment/CommentDeleteModal';
import CommentsExtraContent from '../../components/Comment/CommentsExtraContent';

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
    const { body, createTheThread } = this.props;
    console.warn(createTheThread);
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
      slug, id, refresh, createTheThread,
    } = this.props;
    const { reply } = this.state;
    createTheThread(slug, id, { body: reply }).then(() => {
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
        <CommentEditForm
          data={data}
          handleChange={this.handleChange}
          handleEdit={this.handleEdit}
          handleEditToggle={this.handleEditToggle}
        />
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
          <div>
            <CommentsExtraContent
              handleEditToggle={this.handleEditToggle}
              showDeleteModal={this.showDeleteModal('small')}
              showReplyModal={this.showReplyModal('small')}
            />
            <CommentDeleteModal
              size={size}
              openDelete={openDelete}
              closeDeleteModal={this.closeDeleteModal}
              handleDelete={this.handleDelete}
            />
          </div>
          <div>
            <CommentModal
              openReply={openReply}
              closeReplyModal={this.closeReplyModal}
              handleReplyChange={this.handleReplyChange}
              handleReply={this.handleReply}
            />
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
                <CommentModal
                  openReply={openReply}
                  closeReplyModal={this.closeReplyModal}
                  handleReplyChange={this.handleReplyChange}
                  handleReply={this.handleReply}
                />
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
  createTheThread: PropTypes.func.isRequired,
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
  createTheThread: createThread,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentsCard);
