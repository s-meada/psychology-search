import React from 'react';

const Result = (props) => {
    const fullLink = props.link
    const link = `https://${fullLink.substring(7, fullLink.length - 1)}`

    return (
        <div>
            <a rel={'external'} target="_blank" href={link}>Title: {props.title} </a>
            <h3>Link: {props.link}</h3>
            <h3>Snippet: {props.snippet}</h3>
        </div>
    );
}

export default Result