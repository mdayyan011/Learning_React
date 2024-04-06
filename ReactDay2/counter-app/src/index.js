import ReactDOM from 'react-dom';
import { Main } from './Main';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { New } from './New';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/footer',
    element: <Footer />,
  },
  {
    path: '/new',
    element: <New />,
  },
]);
ReactDOM.render(
  <>
    <RouterProvider router={myRoutes} />
    {/* <Main /> */}
  </>,
  document.getElementById('root')
);
