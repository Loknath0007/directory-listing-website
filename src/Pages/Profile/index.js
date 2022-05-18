import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

const userNavs = [
  {
    name: 'Home',
    link: '/profile',
    icon: <FaHome className="fs-4" />,
  },
  {
    name: 'Buy Credits',
    link: '/profile/buy-credits',
  },
  {
    name: 'Manage Ads',
    link: '/profile/manage-ads',
  },
  {
    name: 'Get Verified Badge',
    link: '/profile/get-verified-badge',
  },
];

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container my-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 border-bottom border-danger">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button className="btn btn-danger d-lg-none">Buy Credits</button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mt-3 mt-lg-0">
                {userNavs.map((nav, index) => (
                  <NavLink
                    to={nav.link}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active ms-3' : 'nav-link ms-3'
                    }
                  >
                    {nav.icon || nav.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <button className="btn btn-danger d-lg-block d-none">
              Buy Credits
            </button>
          </div>
        </nav>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
