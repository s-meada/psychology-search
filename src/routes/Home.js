import React from 'react';
// import Logo from '../components/Logo/Logo';
import Message from '../components/Message/Message';
import SearchBox from '../components/SearchBox/SearchBox';

const Home = (props) => {
    return (
        <div>
            {/* <Logo /> */}
            <div className="big-text">
                <h4>Psychology Search</h4>
            </div>
            <SearchBox location='center' />
            <Message />
        </div>
    );
}

export default Home;