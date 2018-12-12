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
    const { match: { params } } = this.props;
    api.article.single(params.slug)
      .then((response) => {
        this.setState({ article: response.data });
      })
      .catch(err => console.warn(err));
  }

  render() {
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
