import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setArticles, getArticle, deleteArticle } from '../../redux/actions';
import ArticleView from '../../components/Article/ArticleView';

export class Article extends Component {
  static propTypes = {
    articles: PropTypes.shape({}).isRequired,
    addArticles: PropTypes.func.isRequired,
  }

  state = {
    article: {
      author: {
        followers: [],
      },
    },
    slug: '',
    show: false,
    loading: true,
  }

  componentDidMount() {
    const { match: { params }, singleArticle } = this.props;
    this.setState({ slug: params.slug });
    singleArticle(params.slug)
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ article: response.data });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  redirect = () => {
    const { slug } = this.state;
    const { history } = this.props;
    history.push(`/article/update/${slug}`);
  }

  confirmDelete = () => {
    this.setState({ show: true });
    setTimeout(() => this.setState({ show: false }), 4000);
  }

  deleteArticle = () => {
    const { history, removeArticle } = this.props;
    const { slug } = this.state;
    this.setState({ loading: true });
    removeArticle(slug)
      .then((response) => {
        this.setState({ loading: false });
        alert(`Deleted successfully${response.data}`);
        history.push('/articles');
      })
      .catch((error) => {
        this.setState({ loading: false });
        return error;
      });
  }

  render() {
    const { article } = this.state;
    const { body } = article;
    return body ? (
      <div>
        <ArticleView
          confirmDelete={this.confirmDelete}
          deleteArticle={this.deleteArticle}
          {...this.state}
          redirect={this.redirect}
        />
      </div>
    ) : <div />;
  }
}

export const mapStateToProps = state => ({
  articles: state.articlelist,
});

const mapDispatchToProps = {
  addArticles: setArticles,
  removeArticle: deleteArticle,
  singleArticle: getArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
