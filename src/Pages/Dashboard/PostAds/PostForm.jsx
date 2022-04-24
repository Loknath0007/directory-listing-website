import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./PostForm.css";
import AddImages from "./AddImages";
import ContactDetails from "./ContactDetails";

const PostForm = () => {
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
  const [categoryText, setCategoryText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const handleChange = (value) => {
    setCategoryText(value);
    const selectCategory = categories.find(
      (c) => c.categoryName === value.trim()
    );
    if (selectCategory) {
      setSelectedCategory(selectCategory);
    } else {
      setSelectedCategory(selectCategory);

      setSelectedSubCategories([]);
    }
  };

  const handleClear = () => {
    setCategoryText("");
    setSelectedCategory(null);
    setSelectedSubCategories([]);
  };

  const handleCheckboxChange = (subCategory) => {
    const newSubCategories = [...selectedSubCategories];
    const existSubC = newSubCategories.find(
      (subC) => subC.Name === subCategory.Name
    );
    if (!existSubC) {
      newSubCategories.push(subCategory);
      setSelectedSubCategories(newSubCategories);
    } else {
      const filterSubC = newSubCategories.filter(
        (subC) => subC.Name !== subCategory.Name
      );
      setSelectedSubCategories(filterSubC);
    }
  };

  return (
    <div className="w-50 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title to be short!" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descriptions</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            rows="5"
            placeholder="Share more details to make effectives"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Price">
          <Form.Label>Price (BDT)</Form.Label>
          <Form.Control
            type="number"
            placeholder="What would you pay? Give a price!"
            required
          />
        </Form.Group>
        <Form.Label htmlFor="category">Select Category</Form.Label>
        <div className="position-relative">
          <input
            value={categoryText}
            type="text"
            className="form-control "
            list="category"
            placeholder="Select Category"
            onChange={(e) => handleChange(e.target.value)}
          />
          <FontAwesomeIcon
            onClick={() => handleClear()}
            className={`ms-1 ${
              !categoryText && "d-none"
            } select-category-Xmark cursor-pointer`}
            size="lg"
            icon={faXmark}
          />
        </div>

        <datalist id="category" className="w-100">
          {categories.map((c) => (
            <option value={c.categoryName}></option>
          ))}
        </datalist>

        {/* show sub categories */}
        <div>
          {selectedCategory && (
            <div className="fw-bold my-2">
              Select Sub Category for {selectedCategory?.categoryName}
            </div>
          )}
          <div className="ms-5 mb-3">
            {selectedCategory?.subCategories.map((subCategory) => (
              <Form.Check
                onChange={() => handleCheckboxChange(subCategory)}
                type="checkbox"
                id={subCategory.Name}
                label={subCategory.Name}
              />
            ))}
          </div>
        </div>

        {/* addImage */}
        <AddImages />
        {/* contact details */}
        <ContactDetails />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
