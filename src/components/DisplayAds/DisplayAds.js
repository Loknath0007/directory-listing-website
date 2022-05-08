import React, { useEffect, useState } from "react";
import "./DisplayAds.css";
import mobile from "../../images/Xiaomi-Redmi-10A.jpg";
import gp from "../../images/gp_ad.jpg";
import SingleAd from "../SingleAd/SingleAd";

const DisplayAds = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch("./ads.json")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);
  return (
    <div>
      <div className="main_container">
        <div className="display_ads">
          <div className="display_ads_left_bar">
            <div className="sort_ads">
              <p>Sort results by</p>
              <select name="category" id="filter_ads" form="carform">
                <option value="">Date: Newest on top</option>
                <option value="">Date: Oldest on top</option>
                <option value="">Price: High to low</option>
                <option value="">Price: Low to high</option>
              </select>
            </div>

            <div className="filter_ads">
              <p>Filter ads by</p>
              <input
                type="checkbox"
                name="doorstepdelivery"
                value="doorstepdelivery"
                id="doorstepdelivery"
              />
              <label for="doorstepdelivery">Doorstep Delivery</label>
              <br />
              <input type="checkbox" id="urgent" name="urgent" value="urgent" />
              <label for="urgent">Urgent</label>
              <br />
              <input
                type="checkbox"
                id="featured"
                name="featured"
                value="featured"
              />
              <label for="featured">Featured</label>
            </div>

            <div className="type_of_poster">
              <p>Type of poster</p>
              <select name="category" id="filter_ads" form="carform">
                <option value="">All</option>
                <option value="">Members</option>
                <option value="">Authorized dealers</option>
                <option value="">Non-Members</option>
              </select>
            </div>

            <div className="ads_category">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
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
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <h6>All Categories</h6>
                      <p>Mobile</p>
                      <p>Watch</p>
                      <p>Home and living</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ads_location">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button"
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
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
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

          <div className="display_ads_middle">
            <h6>Mobiles Phones and Accessories for Sale in Bangladesh</h6>
            <p>Showing 1-25 of 355 ads</p>
            {ads.map((ad) => (
              <SingleAd mobile={mobile} ad={ad} key={ad.id} />
            ))}
          </div>
          <div className="display_ads_right">
            <img width="100%" src={gp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAds;
