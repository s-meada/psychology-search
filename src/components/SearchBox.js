import React from 'react';

const SearchBox = (props) => {

    return (
        <div className='pa2'>
            <input
                className='pa3'
                type='search' 
                placeholder='Search'
                onKeyPress={e => e.key === 'Enter' && e.target.value.length ? props.submitSearch(e) : ''}
            />
        </div>
    );
}

export default SearchBox