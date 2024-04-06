import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import Header from './Header';
import Footer from './Footer';

let dayCount = 10;
let imgSrc =
  'https://play-lh.googleusercontent.com/1aAb1Nyy3OcfwkV5i7yQUDL1lPVknpQp8qsYC7tPhJUukMiBNJwdiTEhNXq5qkZs0Kc';
let imgStyle = {
  width: '25%',
  height: '25%',
};
ReactDOM.render(
  <div>
    {/* <h1> Welcome to linkcode technologies</h1>
    <Header />
    <img src={imgSrc} alt='Linkcode images' style={imgStyle} /> */}
    <Footer dayCount='5' dayWhen='Today' />
    <Footer dayCount='10' dayWhen='Today' />
    <Footer dayCount='50' dayWhen='Today' />
    <Footer dayCount='500' dayWhen='Today' />
  </div>,
  document.getElementById('root')
);
