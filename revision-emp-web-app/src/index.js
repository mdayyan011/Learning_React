import ReactDOM from 'react-dom';
import Home from './Home';
import Main from './Main';
import Emp from './Emp';
import './index.css';
import Product from './Product';
import Parent from './Parent';
import ProductDetails from './ProductDetails';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

let myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/emp',
    element: <Emp />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
]);
ReactDOM.render(
  <RouterProvider router={myRoutes} />,
  document.getElementById('root')
);
