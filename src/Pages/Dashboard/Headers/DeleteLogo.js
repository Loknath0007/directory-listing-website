import React from "react";
import { Button } from "react-bootstrap";

const DeleteLogo = () => {
  const deleteLogo = () => {};
  return (
    <div className="text-center delete_logo py-4">
      <img src="" alt="" />
      <h2>Delete Logo</h2>
      <Button variant="danger" onClick={deleteLogo}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteLogo;
