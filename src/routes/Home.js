import React from 'react';
import Logo from '../components/Logo/Logo';
import Message from '../components/Message/Message';
import SearchBox from '../components/SearchBox/SearchBox';

const Home = (props) => {
    //TODO: only on the home page, does not show the results for searches containing spaces
    return (
        <div>
            <Logo />
            <SearchBox location='center' />
            <Message />
        </div>
    );
}

export default Home;