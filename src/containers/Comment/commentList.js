import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import CommentsCard from './CommentsCard';
import CommentThread from '../../components/Comment/CommentThread';
import './Comment.sass';
import { getComments, setComments } from '../../redux/actions/commentsList';


export class CommentList extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.refreshComments();
  }

  refreshComments = () => {
    const { addComments, fetchComments, slug } = this.props;
    fetchComments(slug)
      .then((response) => {
        this.setState({ loading: false });
        addComments(response.data);
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }


  render() {
    const { comments } = this.props;
    const { loading } = this.state;
    return loading
      ? (
        <div className="ui loading form text-center">Loading...</div>
      )
      : (
        <div>
          <Card>
            <React.Fragment>
              {comments.map(comment => (
                <React.Fragment>
                  <CommentsCard
                    {...this.props}
                    {...comment}
                    body={comment.body}
                    author={comment.author}
                    image={comment.author.image}
                    dislikes={comment.dislike_count}
                    likes={comment.likes_count}
                    date={comment.history[0].created_at}
                    id={comment.id}
                    refresh={this.refreshComments}
                  />
                  <div className="comment-replies">
                    <Header as="h4">Replies</Header>
                    <CommentThread
                      id={comment.id}
                      thread={comment.thread}
                      refresh={this.refreshComments}
                    />
                  </div>
                </React.Fragment>

              ))
        }

            </React.Fragment>

          </Card>
        </div>
      );
  }
}

export const mapStateToProps = state => ({
  comments: state.commentList.comments,
});

const mapDispatchToProps = {
  addComments: setComments,
  fetchComments: getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
