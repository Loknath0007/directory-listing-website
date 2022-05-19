import React, { useEffect, useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './PostForm.css';
import AddImages from './AddImages';
import ContactDetails from './ContactDetails';
import LocationForm from './LocationForm';

const PostForm = () => {
  const [condition, setCondition] = useState('');
  const [categories, setCategories] = useState([
    {
      _id: 634163136854,
      categoryName: 'Phones',
      subCategories: [
        { Name: 'Home Appliances', _id: 64564464556 },
        { Name: 'Living Room Furniture', _id: 216344444645313 },
        { Name: 'Sim card', _id: 21634644445313 },
        { Name: 'Bedroom Furniture', _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      categoryName: 'Electronics',
      subCategories: [
        { Name: 'Mobile Phone', _id: 645645454456 },
        { Name: 'Home Appliances', _id: 2165454344645313 },
        { Name: 'Bedroom Furniture', _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      categoryName: 'Home and Living',
      subCategories: [
        { Name: 'Home Appliances', _id: 64564464556 },
        { Name: 'Living Room Furniture', _id: 216344444645313 },
        { Name: 'Sim card', _id: 21634644445313 },
        { Name: 'Bedroom Furniture', _id: 21634554645313 },
      ],
    },
    {
      _id: 63416313681154,
      categoryName: 'Property',
      subCategories: [
        { Name: 'Mobile Phone', _id: 645645454456 },
        { Name: 'Home Appliances', _id: 2165454344645313 },
        { Name: 'Bedroom Furniture', _id: 216545346454313 },
      ],
    },
    {
      _id: 63416341114136854,
      categoryName: 'Fashion and Beauty',
      subCategories: [
        { Name: 'Home Appliances', _id: 645665445456 },
        { Name: 'Living Room Furniture', _id: 216344645645313 },
        { Name: 'Sim card', _id: 21634645313 },
        { Name: 'Bedroom Furniture', _id: 2163354344645313 },
      ],
    },
    {
      _id: 634163136854,
      categoryName: 'Phones',
      subCategories: [
        { Name: 'Home Appliances', _id: 64564464556 },
        { Name: 'Living Room Furniture', _id: 216344444645313 },
        { Name: 'Sim card', _id: 21634644445313 },
        { Name: 'Bedroom Furniture', _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      categoryName: 'Electronics',
      subCategories: [
        { Name: 'Mobile Phone', _id: 645645454456 },
        { Name: 'Home Appliances', _id: 2165454344645313 },
        { Name: 'Bedroom Furniture', _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      categoryName: 'Home and Living',
      subCategories: [
        { Name: 'Home Appliances', _id: 64564464556 },
        { Name: 'Living Room Furniture', _id: 216344444645313 },
        { Name: 'Sim card', _id: 21634644445313 },
        { Name: 'Bedroom Furniture', _id: 21634554645313 },
      ],
    },
    {
      _id: 63416313681154,
      categoryName: 'Property',
      subCategories: [
        { Name: 'Mobile Phone', _id: 645645454456 },
        { Name: 'Home Appliances', _id: 2165454344645313 },
        { Name: 'Bedroom Furniture', _id: 216545346454313 },
      ],
    },
    {
      _id: 63416341114136854,
      categoryName: 'Fashion and Beauty',
      subCategories: [
        { Name: 'Home Appliances', _id: 645665445456 },
        { Name: 'Living Room Furniture', _id: 216344645645313 },
        { Name: 'Sim card', _id: 21634645313 },
        { Name: 'Bedroom Furniture', _id: 2163354344645313 },
      ],
    },
  ]);
  const [categoryText, setCategoryText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [stateText, setStateText] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);

  const [userLocations, setUserLocations] = useState([]);

  useEffect(() => {
    fetch('/locations.json')
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
  const handleStateChange = (value) => {
    setStateText(value);
    const selectState = locations.find((c) => c.state === value.trim());
    if (selectState) {
      setSelectedState(selectState);
    } else {
      setSelectedState(selectState);
      setSelectedCities([]);
    }
  };

  const handleCategoryClear = () => {
    setCategoryText('');
    setSelectedCategory(null);
    setSelectedSubCategories([]);
  };

  const handleLocationClear = () => {
    setStateText('');
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
  const handleConditionChange = (e) => {
    setCondition(e.target.value);
    if (condition === e.target.value) {
      setCondition('');
    }
  };
  return (
    <div className="w-50 mx-auto">
      <Form>
        {/* checkbox condition new/used */}
        <LocationForm />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
