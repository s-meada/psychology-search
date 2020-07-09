import React from 'react';
import './SearchBox.css'

const SearchBox = (props) => {
    const location = props.location === 'center' ? 'pa2 center' : 'pa2 left'

    return (
        <div className={location}>
            <input
                className='pa3 w-40'
                type='search'
                placeholder='Search Powered by Google'
                onKeyPress={e => e.key === 'Enter' && e.target.value.length ? props.submitSearch(e) : ''}
            />
        </div>
        
    );
}

export default SearchBox