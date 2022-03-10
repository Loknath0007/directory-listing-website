import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Headers from "./Pages/Dashboard/Headers/Headers";
import PostAds from "./Pages/Dashboard/PostAds/PostAds";
import SearchAds from "./Pages/Dashboard/SearchAds/SearchAds";
import Categories from "./Pages/Dashboard/Categories/Categories";
import ManageCities from "./Pages/Dashboard/ManageCities/ManageCities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="headers" element={<Headers />} />
        <Route path="new-post-ads" element={<PostAds />} />
        <Route path="search-ads" element={<SearchAds />} />
        <Route path="categories" element={<Categories />} />
        <Route path="manage-cities" element={<ManageCities />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
