import { Link, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Link to={'/'}>Home</Link> |<Link to={'/blog'}>Blog</Link> |
      <Link to={'/about'}>About</Link>
      <div />
      <Outlet />
    </>
  );
};
