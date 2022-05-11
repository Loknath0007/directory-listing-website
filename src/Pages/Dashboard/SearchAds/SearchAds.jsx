import React from "react";
import { Button } from "react-bootstrap";
import SingleAd from "../../../components/SingleAd/SingleAd";
import "./SearchAds.css";
import mobile from "../../../images/Xiaomi-Redmi-10A.jpg";

const SearchAds = () => {
  return (
    <div>
      <div className="search_ads">
        <h3 className="text-center text-white mb-4">Search Ads</h3>
        <div class="input-group mb-3 search_ads_field">
          <input
            type="text"
            class="form-control"
            placeholder="Search Ads"
            aria-label="Search Ads"
            aria-describedby="button-addon2"
          />
          <Button
            variant="warning"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="display_search">
        <SingleAd mobile={mobile} />
      </div>
    </div>
  );
};

export default SearchAds;
