import React from 'react';
import './Result.css'

const Result = (props) => {

     // Remove extra quotes around the info
    const getRidOfQuotes = (str) => {
        return str.substring(1, str.length - 1)
    }
   
    const link = getRidOfQuotes(props.link)
    // Handle the escape characters
    const snippet = JSON.parse(props.snippet)
    const title = JSON.parse(props.title)

    return (
        <div className='result pa2'>
            <div className='pointer'>
                <a rel={'external'} target="_blank" href={link}>{title} </a>
            </div>
            <div className='info'>
                <h5>{link}</h5>
                <h4>{snippet}</h4>
            </div>
        </div>
    );
}

export default Result