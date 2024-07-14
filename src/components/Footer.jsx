import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = { year: 2024 };
  return (
    <>
      <div className='footer_container'>copyright {date.year}</div>
    </>
  );
};

export default Footer;
