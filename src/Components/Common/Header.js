import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsTelephone,
  BsEnvelope,
  BsPhone,
  BsList,
  BsSearch,
  BsPerson,
  BsHouse,
  BsChatLeft,
  BsBell,
} from 'react-icons/bs';
import ProfileOffcanvas from './ProfileOffcanvas';
import MenuOffcanvas from './MenuOffcanvas';
import BottomNav from './BottomNav';

const Header = () => {
  return (
    <header className="sticky-">
      <ProfileOffcanvas />
      <MenuOffcanvas />
      {/* <!-- top--contact navbar --> */}
      <nav className="navbar d-none d-md-block bg-light">
        <div className="container-xl">
          <div className="navbar-nav d-flex flex-row w-100 gap-4">
            <a href="#" className="nav-link d-flex gap-2 align-items-center">
              <BsTelephone className="text-danger" />
              <span className="text-dark">01701039997</span>
            </a>

            <a href="#" className="nav-link d-flex gap-2 align-items-center">
              <BsEnvelope className="text-danger" />
              <span className="text-dark">mntanveer9196@gmail.com</span>
            </a>

            <a
              href="#"
              className="nav-link ms-auto d-flex gap-2 align-items-center"
            >
              <BsPhone className="text-danger" />
              <span className="text-dark">Save big on our app!</span>
            </a>
          </div>
        </div>
      </nav>

      {/* <!-- top--main navbar --> */}
      <nav className="navbar border-bottom bg-white">
        <div className="container-xl">
          <div className="navbar-nav d-flex flex-row align-items-center gap-4 w-100">
            {/* <!-- nav logo --> */}
            <a
              className="navbar-brand fs-3 fw-bolder me-0 text-dark d-none d-md-block"
              href="index.html"
            >
              Softfy
            </a>
            {/* <!-- hamburger menu --> */}
            <a
              href="#menu-sidebar"
              data-bs-toggle="offcanvas"
              role="button"
              aria-controls="menu-sidebar"
              className="d-md-none"
            >
              <span className="fw-bold fs-1 text-secondary">
                <BsList />
              </span>
            </a>
            <form className="d-flex input-group flex-grow-1">
              <input
                className="form-control border-2 border-danger shadow-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger px-4" type="submit">
                <BsSearch />
              </button>
            </form>
            <div className="navbar-nav d-none d-md-block">
              <div className="nav-item d-flex flex-row gap-4">
                <a
                  className="nav-link"
                  href="#account-sidebar"
                  data-bs-toggle="offcanvas"
                  role="button"
                  aria-controls="account-sidebar"
                >
                  <BsPerson className="text-dark fs-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- top--main bottom navbar --> */}
      <nav className="navbar navbar-expand d-none d-md-block bg-danger py-1 my-0">
        <div className="container-xl d-flex align-items-center justify-content-between">
          <div className="gap-2 d-flex flex-grow-1">
            <div className="d-flex gap-4">
              <div>
                <a
                  type="button"
                  href="#menu-sidebar"
                  data-bs-toggle="offcanvas"
                  role="button"
                  aria-controls="menu-sidebar"
                  className="text-white fs-3"
                >
                  <BsList />
                </a>
              </div>
              <div className="dropdown">
                <button
                  className="btn py-2 btn-warning dropdown-toggle px-4 rounded-pill"
                  id="navbarDropdownMenuLink"
                  // role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Desktop </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Laptop </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Men's Watch </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Microwave Oven </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Motor Bike </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Refrigerator </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Smart Phone </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Smart TV & Android TV </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Speaker </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <span> Split AC </span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex gap-2 flex-grow-1 justify-content-center">
              <div>
                <Link to="/all-ads" className="text-white nav-link">
                  All Ads
                </Link>
              </div>
              <div>
                <a href="#campaigns" className="text-white nav-link">
                  Campaigns
                </a>
              </div>
              <div>
                <a href="#" className="text-white nav-link">
                  Help
                </a>
              </div>
            </div>
          </div>
          <div className="my-1">
            <Link className="btn btn-warning rounded-pill px-4" to="/create-ad">
              Post Your Ad
            </Link>
          </div>
        </div>
      </nav>

      {/* <!-- *bottom navbar --> */}
      <BottomNav />
    </header>
  );
};

export default Header;
