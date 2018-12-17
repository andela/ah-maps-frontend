import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../../components/Article';
import ArticleUpdate from '../../components/Article/ArticleUpdate';
import { addArticles, addArticlesError, removeArticleMessage } from '../../redux/actions';

import { api } from '../../utils/api';
import { validate } from '../../utils/validation';

export class ArticleForm extends Component {
  state ={
    title: '',
    body: [],
    imageFile: '',
    errors: {},
    loading: false,
    readOnly: false,
    slug: '',
  }

  componentDidMount() {
    const { match: { params }, removeMessage } = this.props;
    this.setState({ slug: params.slug });
    removeMessage();
    if (params.slug) {
      api.article.single(params.slug)
        .then((response) => {
          const article = response.data;
          this.setState({
            title: article.title,
            body: {
              blocks: JSON.parse(article.body),
              entityMap: {},
            },
            image: article.image,
          });
        })
        .catch(err => console.error(err));
    }
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
    const { errors } = this.state;
    delete errors.body;
    this.setState({ body: blocks });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate({ ...this.state });
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const {
        add, addError, removeMessage, history,
      } = this.props;
      const {
        title, body, imageFile, slug,
      } = this.state;
      this.setState({ loading: true });

      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', JSON.stringify(body));
      formData.append('image_file', imageFile);

      if (slug) {
        api.article.update(slug, formData)
          .then((response) => {
            this.setState({ loading: false });
            const res = response.data;
            add(res);
            setTimeout(() => {
              removeMessage();
              history.push(`/article/${res.slug}`);
            }, 3000);
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
            setTimeout(() => {
              removeMessage();
            }, 2000);
          });
      } else {
        // TODO: move api request to actions
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
    }
  }


  render() {
    const { title, slug } = this.state;
    const { articles } = this.props;

    return slug ? (
      <ArticleUpdate
        title={title}
        onChange={this.onChange}
        articles={articles}
        handleSubmit={this.handleSubmit}
        onEditorChange={this.onEditorChange}
        onImageChange={this.onImageChange}
        {...this.state}
        {...this.props}
      />
    ) : (
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

export const mapStateToProps = state => ({
  articles: state.articles,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  add: addArticles,
  addError: addArticlesError,
  removeMessage: removeArticleMessage,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(ArticleForm);
