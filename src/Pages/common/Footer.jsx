import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#fff" }}
      className="border-top border-2 border-success"
    >
      <Container fluid="lg">
        <Row className="my-3">
          <Col sm={12} md={4}>
            <h6>Download Our App</h6>
            <div className="d-flex mb-4">
              <a href="/">
                <img
                  width={"75%"}
                  src="/images/playStore.png"
                  alt="google play"
                />
              </a>
              <a href="/">
                <img width={"75%"} src="/images/appStore.png" alt="app store" />
              </a>
            </div>
            <h6>Connect With</h6>
            <a className="text-decoration-none fw-bold" href="www.facebook.com">
              <FaFacebook></FaFacebook> Like us on facebook
            </a>

            <h6 className="my-2">Other countries</h6>
            <a className="text-decoration-none " href="/">
              {" "}
              USA
            </a>
          </Col>
          <Col sm={12} md={8}>
            <Row>
              <Col sm={12} md={3}>
                <h6> More from bikroy</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none " href="/">
                      Sell Fast
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Doorstep Delivery
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Membership
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Banner Ads
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Ad Promotions
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Staffing solutions
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={3}>
                <h6>Help & Support</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none " href="/">
                      FAQ
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Stay safe
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={3}>
                <h6> follow bikroy</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none " href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Facebook
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Twitter
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Youtube
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={3}>
                <h6> About bikroy</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none " href="/">
                      About Us
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Careers
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Sitemap
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="text-decoration-none " href="/">
                      Staffing solutions
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      <div className="d-flex justify-content-between mb-4">
        <p>Copyright © Softfy Technologies</p>
        <h5 className="fw-bold">Bikroy.com</h5>
      </div>
      </Container>
     
    </div>
  );
};

export default Footer;
