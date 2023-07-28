import React, { useEffect, useState } from 'react';
import { YOUTUBE_AUTO_SUGGEST_API } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addResult } from '../constants/searchResultsSlice';

const Search = () => {
  const [searchedText, setSearchedText] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.searchResults);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchedText) {
        if (searchResults[searchedText]) {
          setSearchSuggestions(searchResults[searchedText]);
        } else {
          getSearchResults();
        }
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchedText]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_AUTO_SUGGEST_API + '&q=' + searchedText);
    const response = await data.json();
    setSearchSuggestions(response?.items);

    dispatch(
      addResult({
        [searchedText]: response?.items,
      })
    );
  };

  return (
    <div className='search-container'>
      <input
        name='search'
        placeholder='Search anything...'
        className='search-bar'
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        autoComplete='off'
      />
      {showSuggestions && searchSuggestions.length ? (
        <div className='results'>
          {searchSuggestions.map((result) => {
            return (
              <p key={result.eTag} className='result'>
                <span>🔍</span>
                <span>{result?.snippet?.title}</span>
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
