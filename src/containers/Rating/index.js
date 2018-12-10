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


class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount = () => {
    const { getRating } = this.props;
    getRating({ slug: 'how-to-train-your-dragon' });
  }

  show = size => () => this.setState({ size, open: true });

  close = () => this.setState({ open: false });

  changeRating = (newRating) => {
    const { rate } = this.props;
    rate({ rating: newRating, slug: 'how-to-train-your-dragon' });
  }

  render() {
    const { avgRating, userRating } = this.props;
    const { open, size } = this.state;
    return (
      <div>

        <Button className={isLoggedIn() ? 'theme-color' : 'theme-color disabled'} onClick={this.show('mini')}>Rate</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Review</Modal.Header>
          <Modal.Content>
            <div>
              <StarRatings
                rating={userRating}
                starRatedColor="gold"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="3px"
              />
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button className="theme-color" onClick={this.close}>Done</Button>
          </Modal.Actions>
        </Modal>

        <StarRatings
          rating={avgRating}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="gold"
        />
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
});

const matchDispatchToProps = dispatch => bindActionCreators({
  rate: addRating,
  getRating: fetchRating,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Rating);
