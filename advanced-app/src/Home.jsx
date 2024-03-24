import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Link to='/'>
        <li>Home </li>
      </Link>
      <Link to='/login'>
        <li>Login </li>
      </Link>
      <Link to='/read'>
        <li>Read </li>
      </Link>
      <Link to='/   -login'>
        <li>Optimized Login </li>
      </Link>
    </>
  );
};
export default Home;
