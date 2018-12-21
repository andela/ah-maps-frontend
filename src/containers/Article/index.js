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
    tags: [],
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
            previousTags: article.tags,
          }, () => {
            try {
              this.turnTagsToOptions();
            } catch (error) {}
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

  postTags = (tags) => {
    const tagArray = [];
    tags.map((tag) => {
      tagArray.push(tag.value);
      this.setState({ tags: tagArray });
    });
  }

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
        title, body, imageFile, slug, tags,
      } = this.state;
      this.setState({ loading: true });

      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', JSON.stringify(body));
      formData.append('image_file', imageFile);
      tags.map((tag) => {
        formData.append('tags', tag);
      });

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
          handleTags={this.postTags}
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
