import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

const AdminLogin = () => {
  return (
    <>
      <Form className="login_form">
        <div>
          <h3 className="text-muted">Admin Login</h3>
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
          <Button type="submit" className="mb-3">
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AdminLogin;
