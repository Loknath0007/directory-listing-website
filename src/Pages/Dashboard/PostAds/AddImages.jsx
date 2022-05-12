import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./AddImages.css";
const AddImages = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (files) => {
    if (images.length >= 5) {
      alert("You can only upload a maximum of 5 files");
      return false;
    } else {
      setImages([...images, ...files]);
      console.log(...files);
    }
  };
  return (
    <div className="border-top py-3 border-bottom">
      <div className="mb-2 fw-bold">Select Your Ads Photos (up to 5)</div>
      <label
        htmlFor="ad-images"
        className="p-3 fw-bold border cursor-pointer shadow-sm mx-auto d-block text-center rounded-3"
      >
        <FontAwesomeIcon
          className={`ms-1 cursor-pointer`}
          size="3x"
          icon={faImage}
        />
        <div>Add Photos</div>
      </label>
      <input
        onChange={(e) => handleImageChange(e.target.files)}
        className="d-none"
        id="ad-images"
        type="file"
        accept="image/*"
        multiple
        max={5}
      />
      {/* show images preview */}
      <div className="mt-2 w-100 d-inline-block">
        {images &&
          images.map((image) => (
            <div className="position-relative d-inline-block me-3">
              <img
                className="rounded-3 single-img  mb-2 shadow"
                style={{ width: "100px", height: "80px", objectFit: "cover" }}
                src={URL.createObjectURL(image)}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddImages;
