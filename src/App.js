import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ResultsList from './components/ResultsList/ResultsList';
import Logo from './components/Logo/Logo';
import Message from './components/Message/Message';

function App() {
  const [searchField, setSearchField] = useState('')
  const [resultInfo, setResultInfo] = useState([])
  const [page, setPage] = useState('home')

  const submitSearch = async function(event) {
    const searchText = event.target.value
    setSearchField(searchText)
    // console.log('search field:')
    // console.log(searchField)
    console.log(`event target value: ${searchText}`)
    await getSearchResults(searchText)
    // console.log(resultInfo)
  }

  // const logSearchField = () => {
  //   console.log('search field inside useEffect:')
  //   console.log(searchField)
  // }

  const getSearchResults = (searchText) => {
      console.log('entered get results for:')
      console.log(searchText)
      setPage('search')
      fetch("http://localhost:3001/", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          searchReq: searchText
        })
      })
      .then(res => res.json())
      .then(value => setResultInfo(value))
      // .then(console.log)
      .catch(() => setPage('error')) // This catch block is where the code goes to when there are no search results. Put the no results page assignment inside it
  }

  // first update checks make sure we don't search during the first render
  const firstUpdate = useRef(true);
  useEffect(() => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if(resultInfo.length) {
      console.log(resultInfo);
    }
  })
  

  return (
    <div>
      {
        page === 'home' ?
        <div>
          <Logo />
          <SearchBox location='center' submitSearch={submitSearch} />
          <Message />
        </div>
        : Array.isArray(resultInfo) && resultInfo.length && page === 'search' ?
        <div>
          <SearchBox location='left' submitSearch={submitSearch} />
          <h3>Showing results for: "{searchField}"</h3>
          <ResultsList info={resultInfo} />
        </div>
        : page === 'error' ?
        <div>
          <SearchBox location='left' submitSearch={submitSearch} />
          <h3>"{searchField}" did not match any of our sources. </h3>
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  );
}

export default App;
