import React from "react";
import "./AboutUs.css";
import aboutImg from "../../images/about-us.svg";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillTags, AiOutlineFileSearch } from "react-icons/ai";
import Header from "../common/Header";
import Footer from "../common/Footer";
import GetInTouch from "./GetInTouch";

const AboutUs = () => {
  return (
    <div className="about_us_body">
      <Header />
      <Container>
        <div className="main_container about_us_body_container">
          <div className="text-center mt-4 mb-5 mb-3">
            <img className="w-50 mt-5" src={aboutImg} alt="" />
          </div>
          <div className="about_text mb-5 text-center">
            <h3 className="mb-3">About Bikroy</h3>
            <p>
              Bikroy is a platform on which you can buy and sell almost
              everything! Use the location selector to find deals close to you
              or check out ads to have items delivered directly to you with 100%
              buyer protection.
            </p>
          </div>
          <Row md={2} className="about_sell_buy g-5 ">
            <div className="about_sell mb-3 px-5">
              <Row md={2} g={5}>
                <Col md={2}>
                  <AiFillTags />
                </Col>
                <Col md={10}>
                  <h5 className="my-2">Have items to sell?</h5>
                  <p className="my-2">
                    Have items to sell? Sign up for a free account to start
                    selling your items! It takes less than 2 minutes to post an
                    ad. Visit How to sell fast for some tips on creating great
                    ads that generate a lot of buyer interest. If you have a lot
                    of items to sell, consider buying a membership and enjoy
                    additional benefits. We also have some great tools that help
                    make your ad stand out from the rest. Check out the Ad
                    Promotions page for more information.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="about_buy mb-3 px-5">
              <Row md={2}>
                <Col md={2}>
                  <AiOutlineFileSearch />
                </Col>
                <Col md={10}>
                  <h5 className="my-2">Looking to buy something?</h5>
                  <p className="my-2">
                    Bikroy has the widest selection of items all over Bangladesh
                    and across more than 50 different categories. Whether you're
                    looking for a car, mobile phone, house, computer or pet, you
                    will find the best deal on Bikroy. Our search and filters
                    make it super easy to find exactly what you're looking for!
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
          <hr />
          <Row>
            <p className="text-center py-4">
              Please note that we carefully review every ad before it is
              published to ensure that the quality is up to our standards. Check
              out the FAQs page for answers to the most frequently asked
              questions.
            </p>
          </Row>
        </div>
        <div className="my-4 py-4 bg-white main_container">
          <GetInTouch />
        </div>
      </Container>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
