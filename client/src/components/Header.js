/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = () => {
  const user = useSelector(state => state.auth);
  const [isActive, setIsActive] = useState(false);

  const renderContent = () => {
    switch(user){
      case null:
        return;
      case false:
        return <div className="navbar-item has-text-white is-size-5 has-text-weight-bold add-credits"><a href="/auth/google">Login With Google</a></div>;
      default:
        return [
          <div key="1" className="navbar-item has-text-white is-size-5 add-credits"><Payments /></div>,
          <div className="navbar-item has-text-white is-size-5 credits" key="3">
          Credits: {user.credits}
          </div>,
          <div key="2" className="navbar-item has-text-white is-size-5 has-text-weight-bold add-credits"><a href="/api/logout" className="has-text-white logout">Logout</a></div>
        ];
    };
  };

  return (
    <nav className="navbar header" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          to={user ? '/surveys' : '/'}
          className="navbar-item has-text-white is-size-2 has-text-weight-bold brand"
        >
          react!surveys
        </Link>

        <a
          onClick={() => setIsActive(!isActive)}
          role="button"
          className={`navbar-burger burger has-text-white ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active navbar-mobile' : ''}`}>
        <div className="navbar-end">
          {renderContent()}
        </div>
      </div>
  </nav>
  );
};

export default Header;