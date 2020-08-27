import React from 'react';
import './App.css';
import Home from './routes/Home';
import SearchPage from './routes/SearchPage';
import ErrorPage from './routes/ErrorPage';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/:searchQuery" render={(routeProps) => <SearchPage {...routeProps} />} />
        <Route render={() => <ErrorPage /> } />
      </Switch>
    </div>




    // <div>
    //   {
    //     page === 'home' ?
    //     <div>
    //       <Logo />
    //       <SearchBox location='center' submitSearch={submitSearch} />
    //       <Message />
    //     </div>
    //     : Array.isArray(resultInfo) && resultInfo.length && page === 'search' ?
    //     <div>
    //       <SearchBox location='left' submitSearch={submitSearch} />
    //       <h3>Showing results for: "{searchField}"</h3>
    //       <ResultsList info={resultInfo} />
    //     </div>
    //     : page === 'error' ?
    //     <div>
    //       <SearchBox location='left' submitSearch={submitSearch} />
    //       <h3>"{searchField}" did not match any of our sources. </h3>
    //     </div>
    //     :
    //     <div>Loading...</div>
    //   }
    // </div>
  );
}

export default App;
