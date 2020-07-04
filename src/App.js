import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

function App() {
  const [searchField, setSearchField] = useState('')

  const submitSearch = (event) => {
    const searchText = event.target.value
    setSearchField(searchText)
    // console.log('search field:')
    // console.log(searchField)
    console.log(`event target value: ${searchText}`)
  }

  // const logSearchField = () => {
  //   console.log('search field inside useEffect:')
  //   console.log(searchField)
  // }

  const getSearchResults = (searchText) => {
    console.log('entered get results for:')
    console.log(searchText)
    fetch("http://localhost:3001/", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        searchReq: searchText
      })
    })
    .then(res => res.json())
    .then(console.log)
    .catch(() => console.log('no results')) // This catch block is where the code goes to when there are no search results. Put the no results page assignment inside it

  }

  // first update checks make sure we don't search during the first render
  const firstUpdate = useRef(true);
  useEffect(() => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    getSearchResults(searchField)

  })
  

  return (
    <div>
      <SearchBox submitSearch={submitSearch} />
    </div>
  );
}

export default App;
