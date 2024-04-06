import ReactDOM from 'react-dom';
import Emp from './Emp';
import Product from './Product';
import Home from './Home';
import Parent from './Parent';
import SpinnerOfDoom from './SpinnerOfDoom';
import ProductDetails from './ProductDetails';
import './index.css';
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Child from './Child';
const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/parent',
    element: <Parent />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
  {
    path: '/child',
    element: <Child />,
  },
  {
    path: '*',
    element: <SpinnerOfDoom />,
  },
]);
ReactDOM.render(
  <>
    <RouterProvider router={myRoutes} />
    {/* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Parent />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter> */}
  </>,
  document.getElementById('root')
);
