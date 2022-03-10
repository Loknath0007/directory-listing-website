import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
const Categories = () => {
  const [categories, setCategories] = useState([
    {
      _id: 634163136854,
      categoryName: "Phones",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
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
        { Name: "Home Appliances", _id: 64564566456 },
        { Name: "Living Room Furniture", _id: 2163446456645313 },
        { Name: "Sim card", _id: 21634334645313 },
        { Name: "Bedroom Furniture", _id: 2163544645313 },
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

  const handleItemClick = (_id) => {
    const newCategory = categories.find((c) => c._id === _id);
    setCategory(newCategory);
  };

  return (
    <div>
      <h2>Categories</h2>
      <div className="bg-white rounded-3 p-3 d-flex justify-content-between">
        <div className="w-50 pe-4">
          <h6>Select categories</h6>

          <ul className="list-group list-group-flush">
            {categories.map((category) => (
              <CategoriesListItem
                key={category._id}
                category={category}
                handleItemClick={handleItemClick}
              />
            ))}
          </ul>
        </div>
        {category && (
          <div className="w-50">
            <h6>Select SubCategories</h6>
            <ul className="list-group list-group-flush">
              {category.subCategories.m}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

// fake data

const CategoriesListItem = (props) => {
  const { categoryName, _id } = props.category;
  const { handleItemClick } = props;

  return (
    <li
      onClick={() => handleItemClick(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      {categoryName}
      <div className="d-flex align-items-center">
        <Button variant="warning" size="sm" className="me-3">
          Edit
        </Button>
        <FontAwesomeIcon className="mb-0" size="md" icon={faArrowRight} />
      </div>
    </li>
  );
};

const subCategoryListItem = ({ subCategory }) => {
  const { Name, _id } = subCategory;
  return (
    <li
      // onClick={() => setCategoryId(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      {Name}
      <div className="d-flex align-items-center">
        <Button variant="warning" size="sm" className="me-3">
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
