import React from 'react';
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="text-decoration-none text-white">
              Bikroy.com
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <Link to="/" className="text-decoration-none text-white">
                  All Ads
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link>
                {user && !loading ? (
                  <div className="d-flex ">
                    {/* <img
                      className="rounded-circle"
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="profile image"
                      width="40"
                      height="40"
                    /> */}
                    <DropdownButton
                      className="ms-3"
                      id={'menu'}
                      variant={'secondary'}
                      title={user && user.name}
                    >
                      <Dropdown.Item
                        as={Link}
                        to="/dashboard/home"
                        eventKey="1"
                      >
                        Dashboard
                      </Dropdown.Item>

                      <Dropdown.Item
                        as={Link}
                        to="/dashboard/userProfile"
                        eventKey="2"
                      >
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        eventKey="3"
                        to="/dashboard/settings"
                        active
                      >
                        Setting
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        eventKey="4"
                        onClick={() => {
                          dispatch(logout());
                          toast('Logout Successfully', { type: 'success' });
                        }}
                      >
                        Logout
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                ) : (
                  <Link to="/login" className="text-decoration-none text-white">
                    Login
                  </Link>
                )}
              </Nav.Link>
              <Link to="/create-ad">
                <Button variant="warning" className="text-dark">
                  POST YOUR AD
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
