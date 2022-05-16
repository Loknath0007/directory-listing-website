import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import UserAccount from './UserAccount';
import UserDetails from './UserDetails';

const UserProfile = () => {
    return (
        <div>
            <DashboardNav title="User Profile" />
           
            <div className='bg-white m-2 rounded-3 p-3 shadow-sm"'>
                <Row  xs={1} lg={2} className="g-4">
                    <Col> <UserAccount></UserAccount>
                    </Col>
                    <Col><UserDetails></UserDetails></Col>
               </Row>
            </div>
        </div>
    );
};

export default UserProfile;