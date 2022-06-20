import React, { useEffect, useState } from 'react';
import './DisplayAds.css';
import gp from '../../images/gp_ad.jpg';
import SingleAd from '../SingleAd/SingleAd';
import AdsLeftBar from '../AdsLeftBar/AdsLeftBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/actions/postActions';

const DisplayAds = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setAds(posts);
    }
  }, [posts]);

  // console.log(ads)
  return (
    <div>
      <div className="main_container">
        <div className="display_ads">
          <AdsLeftBar />
          <div className="display_ads_middle">
            <h6>Mobiles Phones and Accessories for Sale in Bangladesh</h6>
            <p>Showing 1-25 of 355 ads</p>
            {ads.map((ad) => (
              <SingleAd ad={ad} key={ad._id} />
            ))}
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
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
