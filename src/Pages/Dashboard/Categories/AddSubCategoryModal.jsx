import { Modal } from "react-bootstrap";
import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const AddSubCategoryModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        className="shadow-lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Sub Category of {props.category} Category's
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* add sub categories name */}
          <label htmlFor="" className="mb-2">
            Sub Category Name
          </label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter New Sub Categories"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn-danger">
            Cancel
          </Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddSubCategoryModal;
