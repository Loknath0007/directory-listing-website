import React from 'react';

const SingleSimilarAd = () => {
  return (
    <div>
      <div className="row g-0 m-2">
        <div className="col-md-4 ">
          <img
            src={
              'https://i.bikroy-st.com/sony-bravia-43-full-hd-smart-led-tv-for-sale-dhaka-6/aeecc5b4-3f54-469a-a1c3-3bc1bd2820c3/142/107/cropped.webp'
            }
            className="img-fluid rounded-start"
            alt="..."
          />
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
  );
};

export default SingleSimilarAd;
