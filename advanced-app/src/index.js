import ReactDOM from 'react-dom';
import Main from './Main';
import Home from './Home';
import OptimizedMain from './OptimizedMain';
import Error from './Error';
import Read from './Read';
import First from './First';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Main />,
  },
  {
    path: '/opt-login',
    element: <OptimizedMain />,
  },
  {
    path: '/read',
    element: <Read />,
  },
  {
    path: '/first',
    element: <First />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.render(
  <RouterProvider router={myRouter} />,
  document.getElementById('root')
);
