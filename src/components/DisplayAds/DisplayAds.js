import React, { useEffect, useState } from "react";
import "./DisplayAds.css";
import mobile from "../../images/Xiaomi-Redmi-10A.jpg";
import gp from "../../images/gp_ad.jpg";
import SingleAd from "../SingleAd/SingleAd";
import AdsLeftBar from "../AdsLeftBar/AdsLeftBar";

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
          <AdsLeftBar />
          <div className="display_ads_middle">
            <h6>Mobiles Phones and Accessories for Sale in Bangladesh</h6>
            <p>Showing 1-25 of 355 ads</p>
            {ads.map((ad) => (
              <SingleAd mobile={mobile} ad={ad} key={ad.id} />
            ))}
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="display_ads_right">
            <img src={gp} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAds;
