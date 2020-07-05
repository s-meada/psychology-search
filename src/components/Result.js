import React from 'react';

const Result = (props) => {

    return (
        <div>
            <h3>Title: {props.title}</h3>
            <h3>Link: {props.link}</h3>
            <h3>Snippet: {props.snippet}</h3>
        </div>
    );
}

export default Result