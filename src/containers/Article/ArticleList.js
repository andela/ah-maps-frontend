import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { setArticles, getArticles } from '../../redux/actions';
import Card from '../../components/Card';
import ArticleCard from '../../components/Article/ArticleCard';
import './pagination.sass';

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.shape({}).isRequired,
    addArticles: PropTypes.func.isRequired,
  }

  state = {
    loading: true,
    activePage: 1,
    totalPages: 10,
    itemsCountPerPage: 10,

  }

  componentDidMount() {
    this.refreshArticles();
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
    this.filterContent(pageNumber);
  }

  filterContent= (page) => {
    const { itemsCountPerPage } = this.state;
    const { fetchArticles, addArticles } = this.props;
    const params = Object.assign({
      page_size: itemsCountPerPage,
      page,
    });
    fetchArticles(params)
      .then((response) => {
        this.setState({ loading: false });
        addArticles(response.data);
      });
  }

  refreshArticles = () => {
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
    const { loading, activePage, totalPages } = this.state;
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
          <div className="pagination__container">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={totalPages}
              totalItemsCount={articles.count}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div>
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
