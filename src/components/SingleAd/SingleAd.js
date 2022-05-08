import React from "react";
import "./SingleAd.css";

const SingleAd = ({ mobile, ad }) => {
  return (
    <div>
      <div class="card mb-3 single_ad">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={mobile} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Xiaomi X2 Smart Phone</h5>
              <p class="card-text text-muted">Uttara, Dhaka</p>
              <h6 class="card-title text-success">Price: 123</h6>
              <p class="card-text text-end">
                <small class="text-muted ">23 days</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
