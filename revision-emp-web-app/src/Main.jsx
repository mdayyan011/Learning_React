import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <>
      <Link to='/home'>
        <li>Home</li>
      </Link>
      <Link to="/product">
        <li>Product</li>
      </Link>
      <Link to="product/:id">
        <li>Product Details</li>
      </Link>
      <Link to="/emp">
        <li>Emp</li>
      </Link>
    </>
  );
};

export default Main;
