import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Headers from "./Pages/Dashboard/Headers/Headers";
import PostAds from "./Pages/Dashboard/PostAds/PostAds";
import SearchAds from "./Pages/Dashboard/SearchAds/SearchAds";
import Categories from "./Pages/Dashboard/Categories/Categories";
import ManageLocations from "./Pages/Dashboard/ManageLocations/ManageLocations";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SingleAdDetail from "./Pages/SingleAdDetail/SingleAdDetail";
import Ads from "./components/Ads/Ads";
import Footers from "./Pages/Dashboard/Footers/Footers";
import FooterDetails from "./Pages/Dashboard/Footers/FooterDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="headers" element={<Headers />} />
        <Route path="new-post-ads" element={<PostAds />} />
        <Route path="search-ads" element={<SearchAds />} />
        <Route path="categories" element={<Categories />} />
        <Route path="manage-locations" element={<ManageLocations />} />
        <Route path="footers" element={<Footers />}>          
        </Route>
        <Route path="detail" element={<FooterDetails />}></Route>
      </Route>

      <Route path="adDetail" element={<SingleAdDetail />} />
      <Route path="registration" element={<Registration />} />

      <Route path="ads" element={<Ads />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
