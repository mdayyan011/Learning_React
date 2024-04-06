import './index.css';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <Link to='/'>
        {' '}
        <li>Home</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/new'>
        <li>New</li>
      </Link>
      <Link to='contact'>
        <li>Contact</li>
      </Link>
    </>
  );
};
