import React from "react";
import "./Registration.css";
import { Button, Form, FormControl, FormGroup, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../common/Header";

const Registration = () => {
  return (
    <div>
      <Header />

      <Form className="registration_form">
        <h3 className="text-muted">Please Register</h3>

        <FormGroup className="my-3">
          <FormControl
            placeholder="Enter Your Name"
            id="name"
            name="name"
            required
          ></FormControl>
        </FormGroup>
        <FormGroup className="my-3">
          <FormControl
            placeholder="Enter Your Email"
            id="email"
            name="email"
            type="email"
            required
          ></FormControl>
        </FormGroup>

        <FormGroup className="my-3">
          <FormControl
            name="password"
            type="password"
            id="password"
            placeholder="Enter Your Password"
            required
          ></FormControl>
        </FormGroup>
        <FormGroup className="my-3">
          <FormControl
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            type="password"
            required
          ></FormControl>
        </FormGroup>
        <FormGroup className="my-3">
          <FormControl
            name="mobile"
            id="mobile"
            placeholder="Mobile No"
            type="text"
          ></FormControl>
        </FormGroup>
        <Button type="submit" className="registration_btn mb-3">
          Register
        </Button>
        <NavLink as={Link} to="/login">
          {"Already registered? Please login "}
        </NavLink>
      </Form>
    </div>
  );
};

export default Registration;
