import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./AddImages.css";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AddImages = () => {
  const [images, setImages] = useState([]);

  // upload image functionalities
  const handleImageChange = (files) => {
    if (images.length >= 5) {
      alert("You can only upload a maximum of 5 files");
      return false;
    } else {
      setImages([...images, ...files]);
    }
  };

  // draggable images ordering
  const reorder = (images, startIndex, endIndex) => {
    const result = Array.from(images);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const onEnd = (result) => {
    console.log(result);
    setImages(reorder(images, result.source.index, result.destination.index));
  };

  // remove images
  const removeImages = (img) => {
    const newImages = [...images];
    const restImages = newImages.filter((image) => image !== img);
    setImages(restImages);
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
        multiple={false}
        maxLength={5}
      />

      {images.length ? <p className="m-2">You can reorder your photos</p> : ""}
      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="123" direction="horizontal">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} className="mt-2 w-100 d-inline-block">
              {images.map((image, index) => (
                <Draggable
                  draggableId={index + ""}
                  key={index + ""}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="mt-0 d-inline-block me-3 "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* show images preview */}
                      <div className="position-relative">
                        <img
                          className="rounded-3 mb-2 shadow "
                          style={{
                            width: "92px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          src={URL.createObjectURL(image)}
                          alt=""
                        />
                        {/* image remove icon */}
                        <div
                          onClick={() => removeImages(image)}
                          className="img-remove-icon position-absolute"
                        >
                          <AiOutlineCloseCircle title="Remove Photo"></AiOutlineCloseCircle>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {/* {provided.placeholder} */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default AddImages;
