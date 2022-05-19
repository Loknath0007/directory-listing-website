import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const PackageModal = ({ setShow, show, pack }) => {
    console.log(pack);
    const [title, setTitle]=useState('')
    const [price, setPrice]=useState('')
    const [features, setFeatures]=useState('')
    const [data, setData]=useState({})

    const handleClose = () => setShow(false);
    
    // handle title
    const handleTitle = (e) => {
        const value = e.target.value
        setTitle(value);

    }
    // handle Price
    const handlePrice = (e) => {
        const value = e.target.value
        setPrice(value);

    }
    // handle Features
    const handleFeatures = (e) => {
        const value = e.target.value
        setFeatures(value);

    }
    const handleData = () => {
        const newData = {
        title, price, features
        }
        setData(newData)
        console.log(data);
    }
    
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{pack.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId={pack.title}>
              <Form.Label>Package Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={pack.title}
                placeholder="Package title"
                              autoFocus
                              onBlur={handleTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                              defaultValue={pack.price}
                              onBlur={handlePrice}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.features">
              <Form.Label>Features</Form.Label>
              <Form.Control
                type="text"  onBlur={handleFeatures}
                placeholder="Enter package features"
                defaultValue={pack.features.map((e) => e)}
                as="textarea"
                rows={5}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" onClick={handleData} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PackageModal;
