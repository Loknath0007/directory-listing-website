import React from "react";
import Footer from "../common/Footer";
// import Header from '../../components/Common/Header';
import Header from "../common/Header";
import Category from "./category/Category";
import Location from "./Location/Location";
import SearchBanner from "./searchBanner/SearchBanner";

const Home = () => {
  return (
    <div>
        <Header></Header>
      <div className="bg-success">
        <SearchBanner></SearchBanner>
      </div>
      <Location />
      <Category></Category>
      <Footer></Footer>
    </div>
  );
};

export default Home;
