import React from 'react';
import Result from '../Result/Result';

const ResultsList = (props) => {

    return (
        <div id="text">
            {
                props.info.map((item, i) => {
                    return (<Result key={i} title={item.title} link={item.link} snippet={item.snippet}/>);
                })
            }
        </div>
    );
}

export default ResultsList