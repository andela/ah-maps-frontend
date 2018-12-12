import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setArticles } from '../../redux/actions';
import { api } from '../../utils';
import Card from '../../components/Card';
import ArticleCard from '../../components/Article/ArticleCard';

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.shape({}).isRequired,
    addArticles: PropTypes.func.isRequired,
  }

  state = {}

  componentDidMount() {
    const { addArticles } = this.props;
    api.article.list({})
      .then((response) => {
        addArticles(response.data);
      })
      .catch(err => console.warn(err));
  }

  render() {
    const { articles } = this.props;
    return (
      <div>

        <Card>
          <React.Fragment>
            {articles.results.map(article => (

              <ArticleCard
                {...this.props}
                {...article}
                readingTime={article.reading_time}
                key={article.slug}
              />

            ))
        }
          </React.Fragment>

        </Card>
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
