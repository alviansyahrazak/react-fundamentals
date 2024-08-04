import '../index.css';
import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <NavLink
        to={'/'}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Home
      </NavLink>{' '}
      |
      <NavLink
        to={'/blog'}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Blog
      </NavLink>{' '}
      |
      <NavLink
        to={'/about'}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        About
      </NavLink>
      <div />
      <Outlet />
    </>
  );
};
