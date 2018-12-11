import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../../components/Article';
import { addArticles, addArticlesError } from '../../redux/actions';

import { api } from '../../utils/api';
import upload from '../../utils/upload';

export class index extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state ={
    title: '',
    body: '',
    image: '',
    errors: {},
    loading: false,
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { errors } = this.state;
    delete errors[name];
    this.setState({
      [name]: value,
      errors,
    });
  };

  // getImages = (state, content) => {
  //   const { blocks } = content;
  //   if (blocks[0].type === 'image') {
  //     console.log('yupp');
  //   }
  // };

  onImageChange = (image) => {
    this.setState({ articleImage: image });
  }

  changeDem = (state, content) => {
    const { blocks } = content;
    if (blocks[0].type === 'image') {
      const { data: { url } } = blocks[0];
      const chosenimage = url;
      this.setState({ image: chosenimage });
    } else {
      this.setState({
        body: blocks[0].text,
      });
    }
  };

  handleUpload = (file, state) => {
    upload({
      body: file,
      progress: (e) => {
        state.updateProgressBar(e);
      },
    })
      .then((data) => {
        state.uploadCompleted(data.secure_url);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api.user.article({ ...this.state })
      .then((response) => {
        const res = response.data;
        addArticles(res);
      })
      .catch((error) => {
        addArticlesError(error);
      });
  }


  render() {
    const { title } = this.state;
    const { articles } = this.props;
    return (
      <div>
        <Article
          title={title}
          onChange={this.onChange}
          article={articles}
          handleSubmit={this.handleSubmit}
          changeDem={this.changeDem}
          handleUpload={this.handleUpload}
          {...this.state}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  addArticles,
  addArticlesError,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(index);