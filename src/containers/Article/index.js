import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../../components/Article';
import { addArticles, addArticlesError } from '../../redux/actions';

import { api } from '../../utils/api';

export class index extends Component {
  state ={
    title: '',
    body: '',
    imageFile: '',
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
    this.setState({ imageFile: image[0] });
  }

  onEditorChange = (state, content) => {
    const { blocks } = content;
    this.setState({ body: blocks });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { add, addError, history } = this.props;
    const { title, body, imageFile } = this.state;
    this.setState({ loading: true });

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image_file', imageFile);

    api.article.create(formData)
      .then((response) => {
        this.setState({ loading: false });
        const res = response.data;
        add(res);
        history.push(`/article/${res.slug}`);
      })
      .catch((error) => {
        let issue = {};
        this.setState({ loading: false });
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


  render() {
    const { title } = this.state;
    const { articles } = this.props;
    return (
      <div>
        <Article
          title={title}
          onChange={this.onChange}
          articles={articles}
          handleSubmit={this.handleSubmit}
          onEditorChange={this.onEditorChange}
          onImageChange={this.onImageChange}
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
  add: addArticles,
  addError: addArticlesError,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(index);
