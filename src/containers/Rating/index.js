import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import {
  addRating, fetchRating,
} from '../../redux/actions';
import './style.sass';
import { isLoggedIn } from '../../utils/auth';
import { isOwner } from '../../utils/permissions';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';


class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newRating: 0,
    };
  }

  showModal = (size) => {
    const { slug, getRating, userRating } = this.props;
    this.setState({ size, open: true });
    getRating({ slug });
    this.setState({ newRating: userRating });
  };

  closeModal = () => {
    const { refresh } = this.props;
    refresh();
    this.setState({ open: false });
  };

  changeRating = (newRating) => {
    this.setState({ newRating });
  }

  sendRating = () => {
    const { rate, slug } = this.props;
    const { newRating } = this.state;
    rate({ rating: newRating, slug });
  }

  render() {
    const {
      rating, title, username, loading,
    } = this.props;
    const { open, size, newRating } = this.state;
    return (
      <div className="rating">
        <Modal size={size} open={open} onClose={this.closeModal}>
          <Modal.Header>
            {title}
            {' '}
          </Modal.Header>
          <Modal.Content>

            <Segment className="loading-rating">
              <Dimmer className={loading ? 'active ' : null}>
                <Loader size="tiny">your previous rating is....</Loader>
              </Dimmer>

              <StarRatings
                rating={newRating}
                starRatedColor="gold"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="3px"
              />
            </Segment>

          </Modal.Content>
          <Modal.Actions>
            <Button className="theme-color done" onClick={() => { this.closeModal(); this.sendRating(); }}>Done</Button>
          </Modal.Actions>
        </Modal>

        <StarRatings
          rating={rating}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="gold"
        />

        { isLoggedIn() && !isOwner(username) && <Button className="theme-color" onClick={() => this.showModal('mini')}>Rate</Button> }

      </div>

    );
  }
}

Rating.propTypes = {
  rate: PropTypes.func.isRequired,
  getRating: PropTypes.func.isRequired,
  avgRating: PropTypes.number.isRequired,
  userRating: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  avgRating: state.rating.average_rating,
  userRating: state.rating.your_rating,
  loading: state.rating.loading,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  rate: addRating,
  getRating: fetchRating,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Rating);
