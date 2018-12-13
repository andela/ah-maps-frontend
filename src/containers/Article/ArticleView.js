import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setArticles } from '../../redux/actions';
import { api } from '../../utils';
import ArticleView from '../../components/Article/ArticleView';

export class ArticleList extends Component {
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
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ slug: params.slug });
    api.article.single(params.slug)
      .then((response) => {
        this.setState({ article: response.data });
      })
      .catch(err => console.error(err));
  }

  redirect = () => {
    const { slug } = this.state;
    const { history } = this.props;
    history.push(`/article/update/${slug}`);
  }

  render() {
    const { article } = this.state;
    const { body } = article;
    return body ? (
      <div>
        <ArticleView {...this.state} redirect={this.redirect} />
      </div>
    ) : <div />;
  }
}

const mapStateToProps = state => ({
  articles: state.articlelist,
});

const mapDispatchToProps = {
  addArticles: setArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
