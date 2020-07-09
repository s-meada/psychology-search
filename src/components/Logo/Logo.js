import React from 'react';
import logo from './psychology-search-logo.jpg';
import './logo.css'

const Logo = () => {
  // const center = props.location === 'center' ? true : false
  // const location = center ? 'inner pa3 center' : 'inner pa3 left'
  // const style = center ? { height: 200, width: 200 } : { height: 125, width: 125 }

  return (
    <div className='ma4 mt0'>
        <div className='inner pa3 center' style={{ height: 200, width: 200 }}>
          <img alt='logo' src={logo}/>
        </div>
    </div>
  );
}

export default Logo;