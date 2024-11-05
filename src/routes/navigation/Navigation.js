import React from 'react';
import './Navigation.scss';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/clothes.svg';
export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="navbar-logo" />
        </Link>
        <div className="navigation-links">
          <div>
            <Link className="navlink" to="/">
              Home
            </Link>
            <Link className="navlink" to="/shop">
              Shop
            </Link>
          </div>

          <Link className="navlink" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
