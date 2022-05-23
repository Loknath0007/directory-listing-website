import React from 'react';
import './SingleAd.css';

const SingleAd = ({ mobile, ad }) => {
  return (
    <div>
      <div className="card my-3 single_ad">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={mobile} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Xiaomi X2 Smart Phone</h5>
              <p className="card-text text-muted">Uttara, Dhaka</p>
              <h6 className="card-title text-success">Price: 123</h6>
              <p className="card-text text-end">
                <small className="text-muted ">23 days</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
