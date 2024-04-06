import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/parent'>
        <li>Parent</li>
      </Link>
      <Link to='/child'>
        <li>Child</li>
      </Link>
      <Link to='/product'>
        <li>Product</li>
      </Link>
    </>
  );
};

export default Home;
