import React from 'react';

const Result = (props) => {

     // Remove extra quotes around the info
    const getRidOfQuotes = (str) => {
        return str.substring(1, str.length - 1)
    }
   
    const link = getRidOfQuotes(props.link)
    const title = getRidOfQuotes(props.title)
    // Handle the escape characters in the snippet
    const snippet = JSON.parse(props.snippet)

    return (
        <div>
            <a rel={'external'} target="_blank" href={link}>{title} </a>
            <h5>{link}</h5>
            <h4>{snippet}</h4>
        </div>
    );
}

export default Result