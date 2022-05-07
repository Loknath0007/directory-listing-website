import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Category.css";
import { GoDeviceMobile } from "react-icons/go";
import {
  MdOutlineChair,
  MdWork,
  MdDesignServices,
  MdMonitor,
  MdHomeWork,
} from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import {
  GiLargeDress,
  GiCrystalGrowth,
  GiPalmTree,
  GiTShirt,
} from "react-icons/gi";
import { IoFootball, IoHome } from "react-icons/io5";
import { FaIndustry, FaGraduationCap, FaDog } from "react-icons/fa";

const Category = () => {
  return (
    <div>
      <Container>
        <div className="category_container">
          <h5>Browse items by category</h5>
          <div className="category" md={2} lg={4}>
            <div className="category_item">
              <div className="category_icon">
                <GoDeviceMobile />
              </div>
              <div className="category_title">
                <div className="category_name">Mobiles</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <MdMonitor />
              </div>
              <div className="category_title">
                <div className="category_name">Electronics</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <MdOutlineChair />
              </div>
              <div className="category_title">
                <div className="category_name">Home & Living</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <AiFillCar />
              </div>
              <div className="category_title">
                <div className="category_name">Vehicles</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <FaDog />
              </div>
              <div className="category_title">
                <div className="category_name"> Pets & Animals</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <IoHome />
              </div>
              <div className="category_title">
                <div className="category_name"> Property</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>

            <div className="category_item">
              <div className="category_icon">
                <GiTShirt />
              </div>
              <div className="category_title">
                <div className="category_name"> Men's Fashion & Grooming</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>

            <div className="category_item">
              <div className="category_icon">
                <GiLargeDress />
              </div>
              <div className="category_title">
                <div className="category_name"> Women's Fashion & Beauty</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>

            <div className="category_item">
              <div className="category_icon">
                <IoFootball />
              </div>
              <div className="category_title">
                <div className="category_name"> Hobbies, Sports & Kids</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <FaIndustry />
              </div>
              <div className="category_title">
                <div className="category_name"> Business & Industry</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <FaGraduationCap />
              </div>
              <div className="category_title">
                <div className="category_name"> Education</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>

            <div className="category_item">
              <div className="category_icon">
                <GiCrystalGrowth />
              </div>
              <div className="category_title">
                <div className="category_name"> Essentials</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <MdWork />
              </div>
              <div className="category_title">
                <div className="category_name"> Jobs</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <MdDesignServices />
              </div>
              <div className="category_title">
                <div className="category_name"> Services</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <GiPalmTree />
              </div>
              <div className="category_title">
                <div className="category_name"> Agriculture</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
            <div className="category_item">
              <div className="category_icon">
                <MdHomeWork />
              </div>
              <div className="category_title">
                <div className="category_name"> Overseas Jobs</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="hr_category" />
    </div>
  );
};

export default Category;
