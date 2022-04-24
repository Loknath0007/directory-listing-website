import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
     return (
          <div className=''>
               <Container>
                    <Row>
                         <Col sm={12} md={3}>more from bikroy</Col>
                         <Col sm={12} md={3}>help from support</Col>
                         <Col sm={12} md={3}>follow bikroy</Col>
                         <Col sm={12} md={3}>about bikroy</Col>


                    </Row>
               </Container>
          </div>
     );
};

export default Footer;