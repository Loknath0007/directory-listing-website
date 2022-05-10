import React from "react";
import { Link } from "react-router-dom";
import "./AdsLeftBar.css";
const AdsLeftBar = () => {
  return (
    <div className="display_ads_left_bar">
      <div className="sort_ads mb-4">
        <p>Sort results by</p>
        <select name="category" id="filter_ads" form="carform">
          <option value="">Date: Newest on top</option>
          <option value="">Date: Oldest on top</option>
          <option value="">Price: High to low</option>
          <option value="">Price: Low to high</option>
        </select>
      </div>

      <div className="filter_ads mb-4">
        <p>Filter ads by</p>
        <input
          type="checkbox"
          name="doorstepdelivery"
          value="doorstepdelivery"
          id="doorstepdelivery"
        />
        <label
          className="bg-info text-white ms-2 px-2 rounded mb-2"
          for="doorstepdelivery"
        >
          Doorstep Delivery
        </label>
        <br />
        <input type="checkbox" id="urgent" name="urgent" value="urgent" />
        <label
          className="bg-warning text-white ms-2 px-2 rounded mb-2"
          for="urgent"
        >
          Urgent
        </label>
        <br />
        <input type="checkbox" id="featured" name="featured" value="featured" />
        <label
          className="bg-secondary text-white ms-2 px-2 rounded mb-2"
          for="featured"
        >
          Featured
        </label>
      </div>

      <div className="type_of_poster mb-4">
        <p>Type of poster</p>
        <select name="category" id="filter_ads" form="carform">
          <option value="">All</option>
          <option value="">Members</option>
          <option value="">Authorized dealers</option>
          <option value="">Non-Members</option>
        </select>
      </div>
      <hr />

      <div className="ads_category mb-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Category
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h6>All Categories</h6>

                <p>Mobile</p>
                <p>Watch</p>
                <p>Home and living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="ads_location">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Location
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h6>All Bangladesh</h6>
                <p>Dhaka</p>
                <p>Rajshahi</p>
                <p>Khulna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsLeftBar;
