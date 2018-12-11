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
  }

  componentDidMount() {
    const { addArticles, match: { params } } = this.props;
    console.warn(params.slug, 'shit goest here ');
    api.article.single(params.slug)
      .then((response) => {
        this.setState({ article: response.data });
      })
      .catch(err => console.warn(err));
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <ArticleView {...this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articlelist,
});

const mapDispatchToProps = {
  addArticles: setArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
