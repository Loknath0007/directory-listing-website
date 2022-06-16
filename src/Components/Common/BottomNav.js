import React from 'react'
import { BsBell, BsChatLeft, BsFolder2Open, BsHouse, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-bottom border-top d-md-none">
      <div className="navbar-nav d-flex flex-row justify-content-around container-fluid">
        <Link
          className="nav-link d-flex flex-column align-items-center"
          to="/"
        >
          <BsHouse className="fs-3" />
          <span className="d-none d-sm-block">Home</span>
        </Link>
        <Link to="/ads" className="nav-link d-flex flex-column align-items-center">
          <BsFolder2Open className="fs-3" />
          <span className="d-none d-sm-block">Ads</span>
        </Link>
        <Link to="/" className="nav-link d-flex flex-column align-items-center">
          <BsBell className="fs-3" />
          <span className="d-none d-sm-block">Notification</span>
        </Link>
        <a
          className="nav-link d-flex flex-column align-items-center"
          href="#account-sidebar"
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="account-sidebar"
        >
          <BsPerson className="fs-3" />
          <span className="d-none d-sm-block">Account</span>
        </a>
      </div>
    </nav>
  );
}

export default BottomNav