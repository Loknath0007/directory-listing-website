import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UpdateLogo = () => {
  const [logo, setLogo] = useState([]);

  const updateLogo = () => {};
  return (
    <div className="text-center update_logo p-4">
      <h2>Update Logo</h2>

      <div class="input-group">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <Button
          onClick={updateLogo}
          variant="warning"
          class="btn btn-outline-secondary"
          type="submit"
          id="inputGroupFileAddon04"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateLogo;
