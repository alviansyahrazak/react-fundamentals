import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts';
import { Homepage } from '../pages';
import { ErrorPage } from '../pages/ErrorPage';
import { Blog } from '../pages/blogs';
import { SinglePost } from '../pages/blogs/_id';
import { About } from '../pages/About';

import { posts, postById } from '../apis/loaders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: posts,
      },
      {
        path: '/blog/:id',
        element: <SinglePost />,
        loader: postById,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
