import React from 'react';

import Dropdown from './Dropdown';
import SearchBar from './SearchBar';

export default function SearchContainer(props) {
  const { disableCountries, countries, articles, countriesRef, articleRef, searchArticleRef, onSearchSubmit, onArticleChange, onSearchBarKeyPress} = props;

  return <form className="ui form">
    <div className="ui three column doubling grid container">
      <div className="column">
        <Dropdown disabled={disableCountries} _ref={countriesRef} options={countries} onChange={onSearchSubmit} />
      </div>
      <div className="column">
        <Dropdown _ref={articleRef} options={articles} onChange={onArticleChange} />
      </div>
      <div className="column">
        <SearchBar
          _ref={searchArticleRef}
          placeholder="Search article"
          onKeyPress={onSearchBarKeyPress}
        />
      </div>
    </div>
  </form>
}
