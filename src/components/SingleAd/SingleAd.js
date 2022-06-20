import React from 'react';
import './SingleAd.css';

const SingleAd = ({ ad }) => {
  return (
    <div>
      <div className="card my-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`http://localhost:5000/${ad.images[0]}`}
              className="img-fluid rounded-start"
              alt={ad.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {ad.title}
              </h5>
              <p className="card-text text-muted">Uttara, Dhaka</p>
              <h6 className="card-title text-success">Price: {ad.price}</h6>
              <p className="card-text text-end">
                <small className="text-muted ">
                  {ad.createdAt.substring(0, 10)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
