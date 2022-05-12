

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import AddImages from '../PostAds/AddImages';

const AddNewPage = () => {
    return (
        <div>
            <DashboardNav title="Add New Page" />
            
            <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
            <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label className='fw-bold'>Title</Form.Label>
          <Form.Control type="text" placeholder="Title to be short!" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label className='fw-bold'>Descriptions</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            rows="5"
            placeholder="Share more details to make effectives"
          />
        </Form.Group>

       
        

        {/* addImage */}
        <AddImages />
        {/* contact details */}
       
        <Button className='mt-3' variant="primary" type="submit">
         Add New Page
        </Button>
      </Form>
            </div>
        </div>
    );
};

export default AddNewPage;