import React, {useState} from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import ResultsList from '../components/ResultsList/ResultsList';

const SearchPage = (props) => {
    const query = props.match.params.searchQuery;
    const [resultsInfo, setResultsInfo] = useState([])

    const returnResults = (resultsInfo) => {
        setResultsInfo(resultsInfo)
    }

    return (
        <div>
            <SearchBox location='left' searchQuery={query} returnResults={returnResults}/>
            {
                resultsInfo === 'resource exhausted' ?
                    <h3>Our API had too many calls for today.</h3>
                : resultsInfo === 'no results' ?
                    <h3>"{query}" did not match any of our sources. </h3>
                : 
                <div>
                <h3>Showing results for: "{query}"</h3>
                <ResultsList info={resultsInfo} />
                </div>
            }
        </div>
    );
}

export default SearchPage;