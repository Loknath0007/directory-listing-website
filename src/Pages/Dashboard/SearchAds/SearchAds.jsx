import React from "react";
import { Button } from "react-bootstrap";
import "./SearchAds.css";

const SearchAds = () => {
  return (
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
  );
};

export default SearchAds;
