import "./Ads.css";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import DisplayAds from "../DisplayAds/DisplayAds";
const Ads = () => {
  return (
    <div>
      <div className="main_container">
        <div className="ads_top">
          <div className="ads_top_left">
            <div className="ads_top_location">
              <button>
                <MdLocationOn />
                Select Location
              </button>
            </div>
            <div className="ads_top_category">
              <button>
                <AiFillTag />
                Mobiles
              </button>
            </div>
          </div>
          <div className="ads_top_search">
            <input type="text" placeholder="What are you looking for?" />
            <span className="ads_search_icon">
              <FiSearch />
            </span>
          </div>
        </div>
      </div>
      <hr />
      <DisplayAds />
    </div>
  );
};

export default Ads;
