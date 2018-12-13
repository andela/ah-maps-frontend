import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../../components/Article';
import ArticleUpdate from '../../components/Article/ArticleUpdate';
import { addArticles, addArticlesError } from '../../redux/actions';

import { api } from '../../utils/api';

export class index extends Component {
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
    const { match: { params } } = this.props;
    this.setState({ slug: params.slug });
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

  validate = () => {
    const {
      title,
      body,
    } = this.state;
    const { errors } = this.state;
    if (title === '') errors.title = 'Title field required';
    if (body === '') errors.body = 'Body field required';
    if (body.length === 1 && body[0].text === '') {
      errors.body = 'Body field required';
    }
    for (let i = 0; i < body.length; i += 1) {
      if (body[i].text === '') {
        errors.body = 'Body field required';
      } else {
        delete errors.body;
      }
    }

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;
    if (isValid) return true;
    return false;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      const { add, addError, history } = this.props;
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
      } else {
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

const mapStateToProps = state => ({
  articles: state.articles,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  add: addArticles,
  addError: addArticlesError,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(index);
