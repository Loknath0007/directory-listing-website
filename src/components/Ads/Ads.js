import "./Ads.css";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Ads = () => {
  return (
    <div className="main_container">
      <div className="ads_top">
        <div className="ads_top_left">
          <button className="ads_top_location">
            <MdLocationOn />
            Location
          </button>
          <button className="ads_top_category">
            <AiFillTag />
            Doors
          </button>
        </div>
        <div className="ads_top_search">
          <input type="text" placeholder="What are you looking for?" />
          <span className="ads_search_icon">
            <FiSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ads;
