import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faAd,
  faSearch,
  faDollar,
  faHeader,
} from "@fortawesome/free-solid-svg-icons";
import { GoLocation } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";

// const element = <FontAwesomeIcon icon={faCoffee} />;

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <div className="vh-100">
        <ProSidebar toggled="true" collapsed={isCollapse}>
          <SidebarHeader>
            <div className="d-flex align-items-center justify-content-around py-1">
              {!isCollapse && <h3>Wellcome</h3>}
              <div
                className="cursor-pointer p-2"
                onClick={() => setIsCollapse(!isCollapse)}
              >
                <FontAwesomeIcon size="lg" icon={faBars} />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                title="Dashboard"
                icon={<FontAwesomeIcon icon={faChartLine} />}
              >
                <Link to="/dashboard"> Dashboard</Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faHeader} />}>
                <Link to="/dashboard/headers">Headers</Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link to="/dashboard/new-post-ads">Post Ads</Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faSearch} />}>
                <Link to="/dashboard/search-ads"> Search Ads</Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link to="/dashboard/categories"> Categories</Link>
              </MenuItem>
              <MenuItem icon={<GoLocation />}>
                <Link to="/dashboard/manage-locations"> Manage Locations</Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faDollar} />}>
                Payment
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className=" text-center">
            <Link
              className="text-decoration-none text-secondary"
              to="/dashboard/footers"
            >
              {" "}
            
              <Menu iconShape="square">
  <SubMenu title=" Footer">
    <MenuItem><Link
              
              to="/dashboard/detail"
            >Detail </Link></MenuItem>
    <SubMenu title="Columns" >
    <MenuItem>Col 1 </MenuItem>
    <MenuItem>Col 2 </MenuItem>
    <MenuItem>Col 3 </MenuItem>
    <MenuItem>Col 4 </MenuItem>
    </SubMenu>
  </SubMenu>
</Menu>
            </Link>
           
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
