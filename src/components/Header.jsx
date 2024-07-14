import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <div className='header_main'>
        <div className='logo'>THISISLOGO</div>
        <div>
          <ul className='nav_list'>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
