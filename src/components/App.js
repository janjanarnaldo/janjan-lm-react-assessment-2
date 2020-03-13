import React, { Fragment, useRef, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Header from './Header';
import SearchContainer from './SearchContainer';
import ResultSummary from './ResultSummary';
import ResultContainer from './ResultContainer';

import Article from './Article';

import { EVERYTHING, TOP_HEADLINE } from '../constants/articles';
import { COUNTRIES } from '../constants/countries';
import newsApi from '../api/newsApi';

import { newsBuilderForUI } from '../api/newsBuilder';

// this keyword is annoying
export default function App () {
  const countriesRef = useRef(null);
  const articleRef = useRef(null);
  const searchArticleRef = useRef(null);

  const countries = [{ value: '', label: 'Select a country' }, ...COUNTRIES];
  const articles = [{ value: EVERYTHING, label: 'Everything' }, { value: TOP_HEADLINE, label: 'Top Headlines' }];

  const [disableCountries, setDisableCountries] = useState(true);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchSubmit = async () => {
    const country = countriesRef.current.value;
    const article = articleRef.current.value;
    const searchArticle = searchArticleRef.current.value;
    const params = {};
    
    if (article !== EVERYTHING && !!country) params.country = country;
    if (!!searchArticle) params.q = searchArticle;
    
    if (!Object.keys(params).length) {
      setResults([]);
      return;
    }

    try {
      setIsLoading(true);
      await newsApi.get(article, { params }).then(({ data = {} }) => {
        setResults(data.articles.map(newsBuilderForUI));
        setIsLoading(false);
      });
    } catch (e) {
      setResults([]);
      setIsLoading(false);
    }
  };

  const onSearchBarKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearchSubmit();
    }
  };

  const onArticleChange = () => {
    setDisableCountries(articleRef.current.value === EVERYTHING);
    onSearchSubmit();
  };
  
  return <div className="full height">
    <Header name='Arjan Pogi' />

    <SearchContainer
      disableCountries={disableCountries}
      countries={countries}
      articles={articles}
      countriesRef={countriesRef}
      articleRef={articleRef}
      searchArticleRef={searchArticleRef}
      onArticleChange={onArticleChange}
      onSearchSubmit={onSearchSubmit}
      onSearchBarKeyPress={onSearchBarKeyPress}
    />

    <ResultSummary>
      {
        isLoading
        ? <p>Loading...</p>
        : <Fragment>
          <b>Search Results!</b>
          <p>Found {results.length} articles</p>
        </Fragment>
      }
    </ResultSummary>

    {
      isLoading || results.length
      ? <ResultContainer isLoading={isLoading} results={results} component={Article}/>
      : null
    }
  </div>;
}
