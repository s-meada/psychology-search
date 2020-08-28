import React, {useEffect} from 'react';
import './SearchBox.css';
import {withRouter} from 'react-router-dom';

const SearchBox = (props) => {
    const location = props.location === 'center' ? 'pa2 center' : 'pa2 left'    

    const submitSearch = async function(searchText) {
        props.history.push(`/search/${searchText}`)

        console.log(`submitSearch: ${searchText}`)
        // await getSearchResults(searchText)

    }

    const goToSearchResults = (value) => {
        console.log(value)
        props.returnResults(value)
    }

    const getSearchResults = (searchText) => {
        console.log('entered get results for:')
        console.log(searchText)
        // setPage('search')
        fetch("http://localhost:3001/", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            searchReq: searchText
            })
        })
        .then(res => res.json())
        .then(value => goToSearchResults(value))
        // .then(console.log)
        .catch(() => goToSearchResults('no results')) // This catch block is where the code goes to when there are no search results. Put the no results page assignment inside it
    }

    useEffect(() => {
        // If there are no route params, don't search
        if(!props.searchQuery) {
            console.log('nothing')
        }
        // If there are params, search for the params
        else {
            const query = props.searchQuery
            console.log(`searching for: ${query}`)
            getSearchResults(query)
        }
        // eslint-disable-next-line
    }, [props.searchQuery]) // Call useEffect only if the value of props.searchQuery changes

    return (
        <div className={location}>
            <input
                className={'pa3 w-40 center'}
                type='search'
                placeholder='Search Powered by Google'
                onKeyPress={e => e.key === 'Enter' && e.target.value.length ? submitSearch(e.target.value) : ''}
            />
        </div>
        
    );
    
}

export default withRouter(SearchBox);
// exports.results = resultInfo;