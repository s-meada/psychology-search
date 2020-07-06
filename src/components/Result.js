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
            <a rel={'external'} target="_blank" href={link}>Title: {title} </a>
            <h3>Link: {link}</h3>
            <h4>Snippet: {snippet}</h4>
        </div>
    );
}

export default Result