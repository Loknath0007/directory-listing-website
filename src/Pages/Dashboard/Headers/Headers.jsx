import { Button } from "react-bootstrap";
import React, { useState } from "react";
import DeleteLogo from "./DeleteLogo";
import UpdateLogo from "./UpdateLogo";
import "./Headers.css";

const Headers = () => {
  return (
    <div>
      <DeleteLogo />
      <UpdateLogo />
    </div>
  );
};

export default Headers;
