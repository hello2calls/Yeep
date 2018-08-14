import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BizsIndex from './biz_index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.search;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.changeSearch(this.state);

    this.props.fetchBizs(this.state)
    .then(() => {
      this.props.history.push(
        `/search/search_term?${this.state.search_term}/location?${this.state.location}`
      );
    });
  }

  handleUpdate(filed) {
    return (e) => {
      this.setState({[filed]: e.target.value});
    };
  }

  render() {
    return(
      <div className='search-bar-wrapper'>
        <div className='search-bar'>
          <label className='search-find'>
            <span className='search-title'>Find</span>
            <span className='search-inp'>

              <input
                value={this.state.search_term}
                placeholder='burgers, barbers, spas, handymen...'
                onChange={this.handleUpdate('search_term')}
              />

            </span>

          </label>
          <label className='search-location'>
            <span className='search-title'>Near</span>
            <span className='search-inp'>

              <input
                value={this.state.location}
                placeholder='Chinatown SF, San Francisco,CA'
                onChange={this.handleUpdate('location')}
              />

            </span>
          </label>
          <button className='search-btn' onClick={this.handleSubmit}>
            <img className='search-icon' src={window.images.search} />
          </button>

        </div>
      </div>
    );
  }
}

export default SearchBar;
