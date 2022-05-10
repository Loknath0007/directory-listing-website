import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddCategoriesModal = (props) => {
  const [subCategory, setSubCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [allSubCategories, setAllSubCategories] = useState([]);

  const handleAddSubCategory = () => {
    if (subCategory.trim() !== "") {
      const newSubCategories = [...allSubCategories];
      if (newSubCategories.indexOf(subCategory.trim()) === -1) {
        newSubCategories.push(subCategory.trim());
        setAllSubCategories(newSubCategories);
        setSubCategory("");
      } else {
        alert("items already exist");
      }
    }
  };

  const handleClose = (categoryName) => {
    const existSubCategories = [...allSubCategories];
    const newSubCategories = existSubCategories.filter(
      (c) => c !== categoryName
    );
    setAllSubCategories(newSubCategories);
  };

  return (
    <Modal
      {...props}
      size="md"
      className="shadow-lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="categoryName" className="mb-2">
          Category Name
        </label>
        <FormControl
          id="categoryName"
          placeholder="Enter New Category Name"
          aria-label="categoryName"
          aria-describedby="basic-addon2"
          className="mb-3"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value.trim())}
        />
        {/* add sub categories name */}
        <label htmlFor="" className="mb-2">
          Sub Categories Name
        </label>
        <InputGroup className="mb-3">
          <FormControl
            value={subCategory}
            placeholder="Enter New Sub Categories"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSubCategory(e.target.value)}
          />
          <Button onClick={handleAddSubCategory} variant="primary">
            Add
          </Button>
        </InputGroup>

        {/* show sub all sub categories */}
        <div className="">
          {allSubCategories &&
            allSubCategories.map((c) => (
              <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                {c}{" "}
                <FontAwesomeIcon
                  onClick={() => handleClose(c)}
                  className="ms-1 cursor-pointer"
                  size="lg"
                  icon={faXmark}
                />
              </div>
            ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            setAllSubCategories([]);
            setSubCategory("");
            setCategoryName("");
          }}
          className="btn-danger"
        >
          Cancel
        </Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategoriesModal;
