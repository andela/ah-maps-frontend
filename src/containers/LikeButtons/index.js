import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  liker, disliker, getLikes,
} from '../../redux/actions';
import LikeBtn from '../../components/LikeButtons';


class LikeButton extends Component {
  componentDidMount = () => {
    const { slug } = this.props;
    const { fetchLikes } = this.props;

    fetchLikes({
      slug,
    });
  }

  handleLikeClick = () => {
    const { addLike } = this.props;
    const { slug } = this.props;

    addLike({
      slug,
    });
  }

  handleDislikeClick = () => {
    const { addDislike } = this.props;
    const { slug } = this.props;

    addDislike({
      slug,
    });
  }

  render() {
    return (<LikeBtn {...this.props} handleLike={this.handleLikeClick} handleDislike={this.handleDislikeClick} />);
  }
}
LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  disliked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  addLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  fetchLikes: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
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
