import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav/DashboardNav";
import Sidebar from "./Sidebar/Sidebar";
import { FaUsers, FaUserAlt } from "react-icons/fa";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

import { ImStatsBars,ImStatsDots } from "react-icons/im";
import { FiClock } from "react-icons/fi";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <>
      <div style={{ overflow: "hidden" }} className="d-flex ">
        <Sidebar />

        <div
          style={{
            overflowX: "hidden",
            overflowY: "scroll",
            backgroundColor: "#f0f7ff",
          }}
          className="w-100 vh-100"
        >
          <DashboardNav title="Dashboard"></DashboardNav>

          <Row sm="1" md="2" lg="4" className="g-2">
            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-success p-4">
                  <FaUsers className="fs-1 text-white" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">Total Active Users</Card.Text>
                  <Card.Title>5023</Card.Title>
                </Card.Body>
              </div>
            </Col>
            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-primary p-4">
                  <BsFillFileEarmarkPostFill className="fs-1 text-white" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">Today Post</Card.Text>
                  <Card.Title>50</Card.Title>
                </Card.Body>
              </div>
            </Col>

            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-warning p-4">
                  <BsFillFileEarmarkPostFill className="fs-1 text-white" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">All Live Post</Card.Text>
                  <Card.Title>850</Card.Title>
                </Card.Body>
              </div>
            </Col>

            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-black p-4">
                  <BsFillFileEarmarkPostFill className="fs-1 text-white" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">Total Points</Card.Text>
                  <Card.Title>2350</Card.Title>
                </Card.Body>
              </div>
            </Col>
          </Row>
          {/* user conditions */}
          <Row sm="1" md="2" lg="4" className="g-2">
            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-light p-4">
                  <ImStatsBars className="fs-1 text-black" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">New Users</Card.Text>
                  <Card.Title className="m-0 fs-6">
                    <FiClock></FiClock> Today
                  </Card.Title>
                  <Card.Title className="mt-1 fs-6">
                    <FaUserAlt /> 0
                  </Card.Title>
                </Card.Body>
              </div>
            </Col>
            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-light p-4">
                  <ImStatsDots className="fs-1 text-black" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">New Users</Card.Text>
                  <Card.Title className="m-0 fs-6">
                    <FiClock></FiClock> Last Day
                  </Card.Title>
                  <Card.Title className="mt-1 fs-6">
                    <FaUserAlt /> 10
                  </Card.Title>
                </Card.Body>
              </div>
            </Col>

            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-light p-4">
                  <ImStatsBars className="fs-1 text-black" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">New Users</Card.Text>
                  <Card.Title className="m-0 fs-6">
                    <FiClock></FiClock> Last Week
                  </Card.Title>
                  <Card.Title className="mt-1 fs-6">
                    <FaUserAlt /> 53
                  </Card.Title>
                </Card.Body>
              </div>
            </Col>

            <Col>
              <div className="d-flex bg-white m-3">
                <div className="bg-light p-4">
                  <ImStatsDots className="fs-1 text-black" />
                </div>
                <Card.Body>
                  <Card.Text className="m-0">New Users</Card.Text>
                  <Card.Title className="m-0 fs-6">
                    <FiClock></FiClock> Last Month
                  </Card.Title>
                  <Card.Title className="mt-1 fs-6">
                    <FaUserAlt /> 307
                  </Card.Title>
                </Card.Body>
              </div>
            </Col>
          </Row>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
