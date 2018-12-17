import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setArticles, getArticles } from '../../redux/actions';
import Card from '../../components/Card';
import ArticleCard from '../../components/Article/ArticleCard';

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.shape({}).isRequired,
    addArticles: PropTypes.func.isRequired,
  }

  state = {
    loading: true,
  }

  componentDidMount() {
    this.refreshArticles();
  }

  refreshArticles = () =>{
    const { addArticles, fetchArticles } = this.props;
    fetchArticles({})
      .then((response) => {
        this.setState({ loading: false });
        addArticles(response.data);
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { articles } = this.props;
    const { loading } = this.state;
    return loading
      ? (
        <div className="ui loading form text-center">Loading...</div>
      )
      : (
        <div>

          <Card>
            <React.Fragment>
              {articles.results.map(article => (

                <ArticleCard
                  {...this.props}
                  {...article}
                  readingTime={article.reading_time}
                  key={article.slug}
                  rating={article.rating}
                  refresh={this.refreshArticles} 
                />

              ))
        }
            </React.Fragment>

          </Card>
        </div>
      );
  }
}

export const mapStateToProps = state => ({
  articles: state.articlelist,
});

const mapDispatchToProps = {
  addArticles: setArticles,
  fetchArticles: getArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
