import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Commentarea from '../../components/Comment';
import { api } from '../../utils/api';
import { addComment, addCommentError } from '../../redux/actions';
import { getComments, setComments } from '../../redux/actions/commentsList';

class CommentForm extends Component {
    state ={
      data: '',
    }

    handleChange = (e) => {
      this.setState({
        data: e.target.value,
      });
    }

      handleSubmit = (event) => {
        event.preventDefault();

        const {
          addcomment, addError, slug,
          fetchComments, addComments,
        } = this.props;
        const {
          data,
        } = this.state;

        if (slug) {
          api.comment.create(slug, { body: data })
            .then((response) => {
              const res = response.data;
              addcomment(res);
              fetchComments(slug)
                .then((resp) => {
                  addComments(resp.data);
                });
            })
            .catch((error) => {
              let issue = {};
              if (error.message === 'Network Error') {
                issue = { error: 'Network error' };
              } else {
                try {
                  issue = error.response.data.errors;
                } catch (err) { issue = { ...issue }; }
              }
              issue = issue === 'undefined' ? {} : issue;
              addError(issue);
            });
        }
      }

      render() {
        const { body } = this.state;
        const { comments } = this.props;
        return (
          <div>
            <Commentarea
              handleSubmit={this.handleSubmit}
              value={body}
              onChange={this.handleChange}
              comments={comments}
            />

          </div>
        );
      }
}


CommentForm.propTypes = {
  comments: PropTypes.arrayOf.isRequired,
  addcomment: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  addComments: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  comments: state.comments,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  addcomment: addComment,
  addError: addCommentError,
  addComments: setComments,
  fetchComments: getComments,

}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(CommentForm);
