import React from "react";
import "./ContactUs.css";
import contactImg from "../../images/contact-us.svg";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillTags, AiOutlineFileSearch } from "react-icons/ai";
import Header from "../common/Header";
import Footer from "../common/Footer";
import GetInTouch from "../AboutUs/GetInTouch";
import CallOrEmail from "./CallOrEmail";

const ContactUs = () => {
  return (
    <div className="contact_us_body">
      <Header />
      <Container>
        <div className="main_container contact_us_body_container bg-white">
          <div className="text-center mt-4 mb-5 mb-3">
            <img className="w-50 mt-5" src={contactImg} alt="" />
          </div>
          <div className="contact_text text-center">
            <h3 className="mb-3">Contact us</h3>
            <p>
              Check out our FAQs and Stay Safe sections to see if your question
              has already been answered. If not, please get in touch with us and
              we will get back to you as soon as possible.
            </p>
          </div>
          <div className="py-4 bg-white main_container">
            <CallOrEmail />
          </div>
        </div>
      </Container>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
