import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import AddCategoriesModal from "./AddCategoriesModal";
const Categories = () => {
  const [categories, setCategories] = useState([
    {
      _id: 634163136854,
      categoryName: "Phones",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      categoryName: "Electronics",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      categoryName: "Home and Living",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 63416313681154,
      categoryName: "Property",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 63416341114136854,
      categoryName: "Fashion and Beauty",
      subCategories: [
        { Name: "Home Appliances", _id: 645665445456 },
        { Name: "Living Room Furniture", _id: 216344645645313 },
        { Name: "Sim card", _id: 21634645313 },
        { Name: "Bedroom Furniture", _id: 2163354344645313 },
      ],
    },
    {
      _id: 634163136854,
      categoryName: "Phones",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      categoryName: "Electronics",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      categoryName: "Home and Living",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 63416313681154,
      categoryName: "Property",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 63416341114136854,
      categoryName: "Fashion and Beauty",
      subCategories: [
        { Name: "Home Appliances", _id: 645665445456 },
        { Name: "Living Room Furniture", _id: 216344645645313 },
        { Name: "Sim card", _id: 21634645313 },
        { Name: "Bedroom Furniture", _id: 2163354344645313 },
      ],
    },
  ]);

  const [category, setCategory] = useState(null);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  // handle single category item click event
  const handleItemClick = (_id) => {
    const newCategory = categories.find((c) => c._id === _id);
    setCategory(newCategory);
  };

  return (
    <div>
      {/* <h2>Categories</h2> */}
      <DashboardNav title="Control Categories" />
      <div className="bg-white m-3 rounded-3 p-3 shadow-sm">
        <div className="m-auto w-50">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Categories"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
        <div className=" d-flex justify-content-between">
          <div className="w-50 pe-4 ">
            <div className="d-flex justify-content-between mb-2 align-items-center">
              <h6>Select categories</h6>
              <div>
                <Button onClick={() => setCategoryModalOpen(true)} size="sm">
                  Add New
                  <FontAwesomeIcon
                    className="mb-0 ms-1"
                    size="md"
                    icon={faPlus}
                  />
                </Button>
              </div>
            </div>

            {/* add category Modal */}
            <AddCategoriesModal
              show={categoryModalOpen}
              onHide={() => setCategoryModalOpen(false)}
            />

            <ul className="list-group list-group-flush">
              {categories.map((c) => (
                <CategoriesListItem
                  key={c._id}
                  activeCategory={category}
                  category={c}
                  handleItemClick={handleItemClick}
                />
              ))}
            </ul>
          </div>
          {category && (
            <div className="w-50">
              <div className="d-flex justify-content-between mb-2 align-items-center">
                <h6>Sub Categories</h6>
                <div>
                  <Button size="sm">
                    Add New{" "}
                    <FontAwesomeIcon className="mb-0" size="md" icon={faPlus} />
                  </Button>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                {category.subCategories.map((c) => (
                  <SubCategoryListItem subCategory={c} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

// fake data

const CategoriesListItem = (props) => {
  const { categoryName, _id } = props.category;
  const { handleItemClick, activeCategory } = props;

  return (
    <li
      onClick={() => handleItemClick(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      <div className={`${activeCategory?._id === _id && "text-info"}`}>
        {categoryName}
      </div>
      <div className="d-flex align-items-center">
        <Button variant="warning" size="sm" className="me-3">
          Edit
        </Button>
        <FontAwesomeIcon className="mb-0" size="md" icon={faArrowRight} />
      </div>
    </li>
  );
};

const SubCategoryListItem = ({ subCategory }) => {
  const { Name, _id } = subCategory;
  return (
    <li
      // onClick={() => setCategoryId(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      {Name}
      <div className="d-flex align-items-center">
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </div>
    </li>
  );
};

const categories = [
  {
    _id: 634163136854,
    categoryName: "Phones",
    subCategories: ["Mobile Phone", "Wearables", "Sim card", "mobile service"],
  },
  {
    _id: 634163135466854,
    categoryName: "Electronics",
    subCategories: [
      "Mobile Phone",
      "Laptop",
      "Computers",
      "tv",
      "other electronics",
    ],
  },
  {
    _id: 6341645663136854,
    categoryName: "Home and Living",
    subCategories: [
      "Home Appliances",
      "Living Room Furniture",
      "Sim card",
      "Bedroom Furniture",
    ],
  },
  {
    _id: 63416313681154,
    categoryName: "Property",
    subCategories: ["Mobile Phone", "Wearables", "Sim card", "mobile service"],
  },
  {
    _id: 63416341114136854,
    categoryName: "Fashion and Beauty",
    subCategories: ["Mobile Phone", "Wearables", "Sim card", "mobile service"],
  },
];
