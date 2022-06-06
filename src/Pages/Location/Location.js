import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Location = () => {
  const [location, setLocation] = useState([
    {
      country: "Bangladesh",
      states: [
        { Name: "Dhaka", cities: ["Mirpur", "Gazipur"] },
        {
          Name: "CTG",
          cities: ["Cox's Bazar", "Noakhali"],
        },
        { Name: "Mymensing", cities: ["kishurganj"] },
      ],
    },
  ]);
  const [adLocation, setAdLocation] = useState([]);
  console.log(location);
  console.log(adLocation);

  const [countryInput, setCountryInput] = useState("");
  const [stateInput, setStateInput] = useState();
  const [cityInput, setCityInput] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [finalSelectedCity, setFinalSelectedCity] = useState([]);

  // handle country
  const handleCountry = (e) => {
    const countryName = e.target.value;
    const selectedCountry = location.find(
      (e) => e.country.toLowerCase() === countryName.toLowerCase().trim()
    );
    setCountryInput(selectedCountry?.country);
    // console.log(countryInput);
  };

  const handleCountryClear = () => {
    setCountryInput("");
    setSelectedState(null);
    setSelectedCity([]);
    setFinalSelectedCity([]);
  };

  // handle state
  const [states] = location?.map((lo) => lo.states);
  const handleState = (e) => {
    const stateName = e.target.value;
    const State = states.find(
      (e) => e?.Name.toLowerCase() === stateName.toLowerCase().trim()
    );
    setSelectedState(State);
    // select another state
    if (selectedState) {
      setSelectedCity([]);
      setCityInput([]);
    }
    setStateInput(State?.Name);
  };
  // console.log("newStates",stateInput,selectedState);

  //   console.log(states.map((s) => s.Name));

  const handleStateClear = () => {
    setStateInput("");
    setSelectedState(null);
    setSelectedCity([]);
    // setFinalSelectedCity([]);
  };
  // handle city
  //   const [cities] = states.map((s) => s.cities);

  const handleCity = (e) => {
    const cityName = e.target.value;

    const city = selectedState?.cities?.find(
      (e) => e.toLowerCase() === cityName.toLowerCase().trim()
    );
    // console.log(city, selectedState);

    if (selectedCity === undefined) {
      const newCity = [...cityInput, city];
      const finalCity = [...finalSelectedCity, city];
      setCityInput([city]);
      setSelectedCity(newCity);
      setFinalSelectedCity(finalCity);
    }
    // else if (selectedCity?.find(e => e === cityName)) {
    //     alert('entered')
    // }
    else if (city) {
      const newCity = [...cityInput, city];
      //   console.log("newCity", newCity);
      const finalCity = [...finalSelectedCity, city];
      setCityInput([city]);
      setSelectedCity(newCity);
      setFinalSelectedCity(finalCity);
    }
    // console.log(city, selectedCity);

    // console.log("newCity",cityInput,city,cityName,selectedCity);
  };

  //   console.log(cities);
  // handle submit

  const handleCityClear = () => {
    setCityInput([]);
    // setSelectedCity([]);
    // setFinalSelectedCity([]);
  };
  const [title, setTitle] = useState();
  const [images, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(images);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("images", "{ 'ima': 'lafjk' }");
    formData.append("im", JSON.stringify(images));
    // formData.append("images", JSON.stringify(images));

    console.log(...formData);
    for (var value of formData.entries()) {
      console.log(value);
    }

    // const newLocation = {
    //   country: countryInput,
    //   states: [{ Name: stateInput, selectedCity }],
    // };

    // const oldLocation = [];
    // oldLocation.push(newLocation);
    // setAdLocation(oldLocation);
    // console.log(adLocation);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.files);
  };
  //   console.log(
  //     "countryInput",
  //     countryInput,
  //     "selectedState",
  //     selectedState,
  //     "selectedCity",
  //     selectedCity
  //   );

  //   const country = adLocation.map((lo) => lo);
  //   const adStates = adLocation.map((c) => c.states);
  //   const adCities = adStates.map((c) => c.Name);
  //   console.log(adStates[0]?.Name);
  //   console.log("final city",finalSelectedCity);

  console.log(cityInput);

  // handleCity Close

  const handleCityClose = (city) => {
    // total final cities
    const existFinalCities = [...finalSelectedCity];
    const newFinalCities = existFinalCities.filter((c) => c !== city);
    setFinalSelectedCity(newFinalCities);

    // new Cities for specific state
    const existCities = [...selectedCity];
    const newCities = existCities.filter((c) => c !== city);
    setSelectedCity(newCities);
  };
  return (
    <div className="m-5">
      <Form>
        <input
          type="text"
          name="title"
          onChange={handleTitle}
          placeholder="title"
        />
        <label for="formFileSm" class="form-label ">
          <img
            className="cursor-pointer"
            src="https://media.geeksforgeeks.org/wp-content/uploads/gfg-40.png"
            width="140"
            height="140"
            alt="submit"
          />
        </label>
        <input
          name="image"
          class="form-control form-control-sm d-none"
          id="formFileSm"
          type="file"
          accept="image/*"
          onClick={handleImage}
          multiple
        />
        {/* country input */}
        {/* <Form.Group className="mb-3" controlId="country Name">
          <Form.Label>Country</Form.Label>
          <div className="position-relative">
            <Form.Control
              value={countryInput}
              list="country"
              onChange={handleCountry}
              type="text"
              placeholder="Country Name"
            />
            <FontAwesomeIcon
              onClick={() => handleCountryClear()}
              className={`ms-1 ${
                !countryInput && "d-none"
              } select-category-Xmark cursor-pointer`}
              size="lg"
              icon={faXmark}
            />
          </div>
          <datalist id="country" className="w-100">
            {location.map((c) => (
              <option value={c.country}></option>
            ))}
          </datalist>

          {countryInput && (
            <div>
              <Form.Label>State of {countryInput}</Form.Label>
              <div className="position-relative">
                {" "}
                <Form.Control
                  value={stateInput}
                  onChange={handleState}
                  list="state"
                  type="text"
                  placeholder="State Name"
                />
                <FontAwesomeIcon
                  onClick={() => handleStateClear()}
                  className={`ms-1 ${
                    !stateInput && "d-none"
                  } select-category-Xmark cursor-pointer`}
                  size="lg"
                  icon={faXmark}
                />
              </div>
              <datalist id="state" className="w-100">
                {states.map((s) => (
                  <option value={s.Name}></option>
                ))}
              </datalist>
            </div>
          )}
          
          {stateInput && (
            <div>
              <Form.Label>City of {stateInput}</Form.Label>
              <div className="position-relative">
                <Form.Control
                  className="form-control "
                  list="city"
                  type="text"
                  defaultValue={cityInput}
                  onChange={handleCity}
                  placeholder="city Name"
                />
                <FontAwesomeIcon
                  onClick={() => handleCityClear()}
                  className={`ms-1 ${
                    !cityInput.length > 0 && "d-none"
                  } select-category-Xmark cursor-pointer`}
                  size="lg"
                  icon={faXmark}
                />
              </div>
              <datalist id="city" className="w-100">
                {selectedState?.cities.map((s) => (
                  <option value={s}></option>
                ))}
              </datalist>
            </div>
          )}
        </Form.Group> */}
        <Button type="submit" onClick={handleSubmit}>
          Add Location
        </Button>
      </Form>
    </div>
  );
};

export default Location;
