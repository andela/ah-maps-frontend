import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../../components/Article';
import { addArticles, addArticlesError, getTags } from '../../redux/actions';

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

  onImageChange = (image) => {
    this.setState({ articleImage: image });
  }

  changeDem = (state, content) => {
    const { blocks } = content;
    this.setState({
      body: blocks[0].text,
    });
    if (blocks[0].type === 'image') {
      const { data: { url } } = blocks[0];
      const chosenimage = url;
      this.setState({ image: chosenimage });
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

  getTags = () => {
    let fetched = true;
    const { tagoptions } = this.props;
    if (fetched === true) {
      fetched = false;
      api.tags.list()
        .then((response) => {
          const res = response.data;
          tagoptions(res);
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  getOptions = () => {
    this.getTags();
    const { tags } = this.props;
    const options = [];
    let tag;
    for (let i = 0; i < tags.tags.length; i += 1) {
      tag = tags.tags[i];
      options.push({ value: tag.tag, label: tag.tag });
    }
    return options;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { add, addError } = this.props;
    api.article.create({ ...this.state })
      .then((response) => {
        const res = response.data;
        add(res);
      })
      .catch((error) => {
        let issue = {};
        this.setState({ loading: false });
        if (error.data === 'undefined') {
          issue = { error: 'A problem occured with the server' };
        } else if (error.message === 'Network Error') {
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

  handleTagChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }


  render() {
    const { title } = this.state;
    const { articles } = this.props;
    const options = this.getOptions();

    return (
      <div>
        <Article
          title={title}
          onChange={this.onChange}
          articles={articles}
          handleSubmit={this.handleSubmit}
          changeDem={this.changeDem}
          handleUpload={this.handleUpload}
          options={options}
          {...this.state}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
  tags: state.tags,

});

const matchDispatchToProps = dispatch => bindActionCreators({
  add: addArticles,
  addError: addArticlesError,
  tagoptions: getTags,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(index);
