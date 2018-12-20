
import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTags } from '../../redux/actions';

class tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opts: [],
    };
  }

componentDidMount = () => {
  const { getTheTags } = this.props;

  getTheTags().then((response) => {
    const tagArray = [];

    response.data.forEach((value) => {
      tagArray.push({ value: value.tag, label: value.tag });
    });

    this.setState({ opts: tagArray });
  });
}

render() {
  const { handleTags } = this.props;
  const { opts } = this.state;

  return (
    <CreatableSelect
      isMulti
      onChange={handleTags}
      options={opts}
    />

  );
}
}

tags.propTypes = {
  getTheTags: PropTypes.func.isRequired,
  handleTags: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  taglist: state.tag.tags,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  getTheTags: fetchTags,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(tags);
