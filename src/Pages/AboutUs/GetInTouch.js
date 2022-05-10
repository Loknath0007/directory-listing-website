import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoCall } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div className="get_in_touch_container">
      <div className="get_in_touch text-center my-4 ">
        <h2>Questions? Get in touch!</h2>
        <p>Every day from 10:00 AM to 6:00 PM</p>
        <Row>
          <Col>
            <div>
              <span>
                <IoCall />
              </span>
              <strong>Call us</strong>
            </div>
            <p>09609 555444</p>
          </Col>
          <Col>
            <div>
              <span>
                <IoCall />
              </span>
              <strong>Email us</strong>
            </div>
            <p>support@bikroy.com</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GetInTouch;
