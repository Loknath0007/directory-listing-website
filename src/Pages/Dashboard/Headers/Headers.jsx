import React, { useState } from "react";

const Headers = () => {
  const [logo, setLogo] = useState([]);

  const updateLogo = () => {};

  return (
    <div>
      <h2>Update or Delete Logo</h2>
      <form>
        <input type="file" />
        <button onClick={updateLogo} type="submit">
          Update logo
        </button>
      </form>

      <h2>Delete Logo</h2>
    </div>
  );
};

export default Headers;
