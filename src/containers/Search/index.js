import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Icon, Input,
} from 'semantic-ui-react';
import './search.sass';
import Profiles from '../../components/Search/Profiles';
import Articles from '../../components/Search/Articles';
import Tags from '../../components/Search/Tags';
import {
  getArticles,
  addSearchedArticles,
  addSearchedAuthors,
  addSearchedTags,
  addArticles,
} from '../../redux/actions';

export class Search extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
    authors: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
    searchArticles: PropTypes.func.isRequired,
    articleList: PropTypes.func.isRequired,
    searchedArticles: PropTypes.func.isRequired,
    addAuthors: PropTypes.func.isRequired,
    addTags: PropTypes.func.isRequired,
  }

  state = { search: '', showSearchInput: false }

  onChange = (event) => {
    const search = event.target.value;
    this.setState({ search });
    this.onSearch(search);
  }

  toggleSearchVisibility = (showSearchInput) => {
    this.setState({ showSearchInput });
  }

  onSearch = (search) => {
    if (search === '') return;
    const {
      searchArticles, articleList,
      searchedArticles, addAuthors, addTags,
    } = this.props;
    let params = {
      q: search,
    };
    searchArticles(params)
      .then((response) => {
        articleList(response.data);
        searchedArticles(response.data.results);
      });
    params = {
      author: search,
    };
    searchArticles(params)
      .then((response) => {
        addAuthors(response.data.results);
      });
    params = {
      tag: search,
    };
    searchArticles(params)
      .then((response) => {
        addTags(response.data.results);
      });
  }

  render() {
    const {
      tags, authors, articles,
    } = this.props;
    const { search, showSearchInput } = this.state;
    return (
      <React.Fragment>
        <div
          className="item"
          id="search"
          onMouseEnter={() => this.toggleSearchVisibility(true)}
          onMouseLeave={() => this.toggleSearchVisibility(false)}
        >
          <Icon name="search" size="big" />
          <Input value={search} id="search-input" onChange={this.onChange} />
          <div className={showSearchInput ? 'search__popover trans-show' : 'opacity-0'}>
            <div className="search__anchor" />
            <div className="search__dropdown_item searched ui cursor pointer">
              <Link to={`/search/${search}`}>
                <Icon name="search" size="small" />
              Search for: &#39;
                {search}
              &#39;
              </Link>
            </div>
            {authors.length > 0
            && (
            <React.Fragment>
              <div className="search__dropdown_header">
                <div className="float-left">PEOPLE</div>
                <div className="float-right text-muted" />
              </div>
              <br />
              <hr className="faded" />
              <Profiles items={authors} />
            </React.Fragment>
            )
            }
            {articles.length > 0
            && (
            <React.Fragment>
              <div className="search__dropdown_header">
                <div className="float-left">PUBLICATIONS</div>
                <div className="float-right text-muted" />
              </div>
              <br />
              <hr className="faded" />
              <Articles items={articles} {...this.props} />
            </React.Fragment>
            )
            }
            {tags.length > 0
            && (
            <React.Fragment>
              <div className="search__dropdown_header">
                <div className="float-left">TAGS</div>
                <div className="float-right text-muted" />
              </div>
              <br />
              <hr className="faded" />
              <Tags items={tags} />
            </React.Fragment>
            )
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.search.articles || [],
  tags: state.search.tags || [],
  authors: state.search.authors || [],
});

const mapDispatchToProps = {
  searchArticles: getArticles,
  searchedArticles: addSearchedArticles,
  addAuthors: addSearchedAuthors,
  addTags: addSearchedTags,
  articleList: addArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
