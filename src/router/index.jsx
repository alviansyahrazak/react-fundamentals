import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts';
import { Homepage } from '../pages';
import { Blog } from '../pages/blogs';
import { SinglePost } from '../pages/blogs/_id';
import { About } from '../pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <SinglePost />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
