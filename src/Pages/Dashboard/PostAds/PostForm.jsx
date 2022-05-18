import React, { useEffect, useState } from "react";
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
  const [locations, setLocations] = useState([]);
  const [stateText, setStateText] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [multiState, setMultiState] = useState([]);

  // console.log(selectedState?.state);
  useEffect(() => {
    fetch("/locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  const handleCategoryChange = (value) => {
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

  console.log(multiState);

  const handleStateChange = (value) => {
    setStateText(value);
    const existingMultiState = [...multiState];
    const state = locations.find((c) => c.state === value.trim());
    if (value === state.state) {
      if (!existingMultiState.includes(value)) {
        existingMultiState.push(state.state);
        setMultiState(existingMultiState);
      }
    }
    console.log(value, state);

    const selectState = locations.find((c) => c.state === value.trim());
    if (selectState) {
      setSelectedState(selectState);
    } else {
      setSelectedState(selectState);
      setSelectedCities([]);
    }
  };

  const handleCategoryClear = () => {
    setCategoryText("");
    setSelectedCategory(null);
    setSelectedSubCategories([]);
  };

  const handleLocationClear = () => {
    setStateText("");
    setSelectedState(null);
    setSelectedCities([]);
  };

  // const handleSubCategoryChange = (subCategory) => {
  //   console.log(subCategory.target.value);
  //   const newSubCategories = [...selectedSubCategories];
  //   const existSubC = newSubCategories.find(
  //     (subC) => subC.Name === subCategory.Name
  //   );
  //   if (!existSubC) {
  //     newSubCategories.push(subCategory);
  //     setSelectedSubCategories(newSubCategories);
  //   } else {
  //     const filterSubC = newSubCategories.filter(
  //       (subC) => subC.Name !== subCategory.Name
  //     );
  //     setSelectedSubCategories(filterSubC);
  //   }
  // };
  const handleSubCategoryChange = (subCategory) => {
    console.log(subCategory);
    const newSubCategories = [...selectedSubCategories];
    const existSubC = newSubCategories.find((subC) => subC === subCategory);
    if (!existSubC) {
      newSubCategories.push(subCategory);
      setSelectedSubCategories(newSubCategories);
    } else {
      // const filterSubC = newSubCategories.filter(
      //   (subC) => subC !== subCategory
      // );
      setSelectedSubCategories(newSubCategories);
    }
  };
  const handleCityChange = (city) => {
    console.log(city);
    const newCities = [...selectedCities];
    const existCity = newCities.find((c) => c === city);
    if (!existCity) {
      newCities.push(city);
      setSelectedCities(newCities);
    } else {
      setSelectedCities(newCities);
    }
  };

  const handleSubCategoryClose = (categoryName) => {
    const existSubCategories = [...selectedSubCategories];
    const newSubCategories = existSubCategories.filter(
      (c) => c !== categoryName
    );
    setSelectedSubCategories(newSubCategories);
  };

  const handleCityClose = (city) => {
    const existCities = [...selectedCities];
    const newCities = existCities.filter((c) => c !== city);
    setSelectedCities(newCities);
  };
  return (
    <div className="w-50 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title to be short!" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label htmlFor="description">Descriptions</Form.Label>
          <Form.Control
            id="description"
            as="textarea"
            type="text"
            rows="5"
            placeholder="Share more details to make effectives"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price (BDT)</Form.Label>
          <Form.Control
            id="price"
            type="number"
            placeholder="What would you pay? Give a price!"
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="category"> */}
        <Form.Label htmlFor="category">Select Category</Form.Label>
        <div className="position-relative">
          <input
            value={categoryText}
            type="text"
            name="category"
            className="form-control "
            list="category"
            placeholder="Select Category"
            onChange={(e) => handleCategoryChange(e.target.value)}
          />
          <FontAwesomeIcon
            onClick={() => handleCategoryClear()}
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
        <Form.Label htmlFor="sub-category">
          {selectedCategory && (
            <div className="fw-bold my-2">
              Select Sub Category for {selectedCategory?.categoryName}
            </div>
          )}
          {/* <div className="ms-5 mb-3">
            {selectedCategory?.subCategories.map((subCategory) => (
              <Form.Check
                onChange={() => handleCheckboxChange(subCategory)}
                type="checkbox"
                id={subCategory.Name}
                label={subCategory.Name}
              />
            ))}
          </div> */}

          {selectedCategory && (
            <div className="ms-5 mb-3">
              <Form.Select
                onChange={(e) => handleSubCategoryChange(e.target.value)}
                name="sub-category"
                id="sub-category"
                form="sub-category"
              >
                <option selected disabled>
                  --Select Sub Category--
                </option>

                {selectedCategory?.subCategories.map((subCategory) => (
                  // <Form.Check
                  //   onChange={() => handleCheckboxChange(subCategory)}
                  //   type="checkbox"
                  //   id={subCategory.Name}
                  //   label={subCategory.Name}
                  // />
                  <option value={subCategory.Name}>{subCategory.Name}</option>
                ))}
              </Form.Select>
            </div>
          )}

          <div>
            {selectedSubCategories.map((slc) => (
              <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                {slc}{" "}
                <FontAwesomeIcon
                  onClick={() => handleSubCategoryClose(slc)}
                  className="ms-1 cursor-pointer"
                  size="lg"
                  icon={faXmark}
                />
              </div>
            ))}
          </div>
        </Form.Label>

        {/* select location */}

        <Form.Group className="mb-3" controlId="location">
          <Form.Label htmlFor="location">Select Location</Form.Label>
          <div className="position-relative">
            <input
              value={stateText}
              type="text"
              className="form-control"
              list="location"
              placeholder="Select State"
              name="location"
              onChange={(e) => handleStateChange(e.target.value)}
            />
            <FontAwesomeIcon
              onClick={() => handleLocationClear()}
              className={`ms-1 ${
                !stateText && "d-none"
              } select-category-Xmark cursor-pointer`}
              size="lg"
              icon={faXmark}
            />
          </div>
          <div>
            {multiState?.map((state) => (
              <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                {state}{" "}
                <FontAwesomeIcon
                  onClick={() => handleCityClose(state)}
                  className="ms-1 cursor-pointer"
                  size="lg"
                  icon={faXmark}
                />
              </div>
            ))}
          </div>

          <datalist id="location" className="w-100">
            {locations.map((c) => (
              <option value={c.state}></option>
            ))}
          </datalist>

          {/* show cities */}
          {multiState.length <= 1 && (
            <Form.Label htmlFor="city">
              {selectedState && (
                <div className="fw-bold my-2">
                  Select City for {selectedState?.state}
                </div>
              )}

              {selectedState && (
                <div className="ms-5 mb-3">
                  <Form.Select
                    onChange={(e) => handleCityChange(e.target.value)}
                    name="city"
                    id="city"
                    form="city"
                  >
                    <option selected disabled>
                      --Select City--
                    </option>

                    {selectedState?.cities.map((city) => (
                      <option value={city.Name}>{city.Name}</option>
                    ))}
                  </Form.Select>
                </div>
              )}

              <div>
                {selectedCities.map((city) => (
                  <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                    {city}{" "}
                    <FontAwesomeIcon
                      onClick={() => handleCityClose(city)}
                      className="ms-1 cursor-pointer"
                      size="lg"
                      icon={faXmark}
                    />
                  </div>
                ))}
              </div>
            </Form.Label>
          )}
        </Form.Group>

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
