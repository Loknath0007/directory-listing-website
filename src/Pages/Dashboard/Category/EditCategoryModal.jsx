import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';

const EditCategoryModal = (props) => {
  const { category } = props;
  const [editedCategory, setEditedCategory] = useState(category);

  const handleChange = (value) => {
    const newEditedCategory = { ...editedCategory };
    newEditedCategory['categoryName'] = value;
    setEditedCategory(newEditedCategory);
  };

  useEffect(() => {
    setEditedCategory(category);
  }, [category]);

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
            Edit Exist Category Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* add sub categories name */}
          <label htmlhtmlFor="" className="mb-2">
            Category Name
          </label>
          <InputGroup className="mb-3">
            <FormControl
              value={editedCategory.categoryName}
              placeholder="Enter New Sub Categories"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => handleChange(e.target.value.trim())}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger">Delete This Category</Button>
          <Button>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditCategoryModal;
