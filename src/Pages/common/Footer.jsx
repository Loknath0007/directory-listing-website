import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import playStore from "../../images/google-play.png";
import appStore from "../../images/app-store.png";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <Container className="footer_container">
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} className="footer_left">
            <h6>Download our app</h6>
            <div className="footer_app">
              <img src={playStore} alt="play store" />
              <img src={appStore} alt="app store" />
            </div>
            <h6 className="mt-4">Connect with</h6>
            <div className="fb_logo">
              <AiFillFacebook /> Like us on facebook
            </div>
            <h6 className="mt-3">Other countries</h6>
            <div>
              <a href="www">Sri Lanka</a>
            </div>
          </Col>

          <Col xs={12} sm={6} md={8} lg={8} className="footer_right">
            <Row>
              <Col>
                <h6>More from Bikroy</h6>
                <ul>
                  <li>
                    <a href="">Sell Fast</a>
                  </li>
                  <li>
                    <a href="">Doorstep Delivery</a>
                  </li>
                  <li>
                    <a href="">Membership</a>
                  </li>
                  <li>
                    <a href="">Banner Ads</a>
                  </li>
                  <li>
                    <a href="">Ads Promotions</a>
                  </li>
                  <li>
                    <a href="">Staffing Solutions</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h6>Help & Support</h6>
                <ul>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Stay safe</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h6>Follow Bikroy</h6>
                <ul>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Twitter</a>
                  </li>
                  <li>
                    <a href="">Youtube</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h6>About Bikroy</h6>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy policy</a>
                  </li>
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
