import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../utils/auth';
import {
  liker, disliker, getLikes,
} from '../../redux/actions';


class LikeButton extends Component {
  componentDidMount = () => {
    const { fetchLikes } = this.props;

    fetchLikes({
      slug: 'mirriam-117', // TODO: params.slug after merge
    });
  }

  handleLikeClick = () => {
    const { addLike } = this.props;

    addLike({
      slug: 'mirriam-117', // TODO: params.slug after merge
    });
  }

  handleDislikeClick = () => {
    const { addDislike } = this.props;

    addDislike({
      slug: 'mirriam-117', // TODO: params.slug after merge
    })
  }

  render() {
    const {
      liked, disliked, likeCount, dislikeCount
    } = this.props;
    const LikeLabel = liked ? 'Unlike' : 'Like';
    const DislikeLabel = disliked ? 'Undislike' : 'Dislike';
    return (
      <div className="customContainer">
        <div type='button' className={isLoggedIn() ? 'ui red button' : 'ui disabled red button'} id="like-btn" onClick={this.handleLikeClick}>
          <i className="heart icon" />
          { LikeLabel }
        </div>
        <a className="ui basic red left pointing label">
          { likeCount }
        </a>
        <div className={isLoggedIn() ? 'ui red button' : 'ui disabled red button'} id="dislike-btn" onClick={this.handleDislikeClick}>
          <i className="thumbs down icon" />
          { DislikeLabel }
        </div>
        <a className="ui basic red left pointing label">
          { dislikeCount }
        </a>
      </div>
    );
  }
}
LikeButton.propTypes = {
  liked: PropTypes.bool,
  disliked: PropTypes.bool,
  likeCount: PropTypes.number,
  dislikeCount: PropTypes.number,
};

const matchDispatchToProps = dispatch => bindActionCreators({
  addLike: liker,
  addDislike: disliker,
  fetchLikes: getLikes,
}, dispatch);

const mapStateToProps = state => ({
  liked: state.like.liked,
  likeCount: state.like.likeCount,
  disliked: state.like.disliked,
  dislikeCount: state.like.dislikeCount,
});

export default connect(mapStateToProps, matchDispatchToProps)(LikeButton);
