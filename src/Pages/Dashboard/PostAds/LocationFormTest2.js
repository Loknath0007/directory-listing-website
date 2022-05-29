import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../../store/actions/locationActions';

const LocationFormTest2 = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.locations);

  const [searchedLocations, setSearchedLocations] = useState([]);

  const [selectedLocations, setSelectedLocations] = useState([
    // {
    //   country: '',
    //   states: [
    //     {
    //       state: '',
    //       cities: [],
    //     },
    //   ],
    // },
  ]);

  console.log(selectedLocations);

  useEffect(() => {
    setSearchedLocations(locations);
  }, [locations]);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const isCountryExist = (country) =>
    selectedLocations.some((item) => item.country === country);

  const isStateExist = (country, state) =>
    country &&
    state &&
    selectedLocations.some(
      (item) =>
        item.country === country &&
        item.states.some((item) => item.state === state)
    );

  const isCityExist = (country, state, city) =>
    country &&
    state &&
    city &&
    selectedLocations.some(
      (item) =>
        item.country === country &&
        item.states.some((item) => item.state === state) &&
        item.states.some((item) => item.cities.some((item) => item === city))
    );

  const handleCountry = (e, location) => {
    isCountryExist(location.country);
    if (isCountryExist(location.name)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item.country !== location.name)
      );
    } else {
      // add country
      setSelectedLocations([
        ...selectedLocations,
        {
          country: location.name,
          states: [],
        },
      ]);
      // add the country
      // setSelectedLocations([
      //   ...selectedLocations,
      //   {
      //     country: location.name,
      //     states: [
      //       ...location.state.map((state) => ({
      //         state: state.name,
      //         cities: state.city,
      //       })),
      //     ],
      //   },
      // ]);
    }
  };

  const handleState = (e, location, state) => {
    isStateExist(location.name, state.name);
    if (e.target.checked) {
      if (isCountryExist(location.name)) {
        if (isStateExist(location.name, state.name)) {
          return;
        } else {
          // find the country and add the state
          const newSelectedLocations = [...selectedLocations];
          const countryIndex = newSelectedLocations.findIndex(
            (item) => item.country === location.name
          );
          newSelectedLocations[countryIndex].states.push({
            state: state.name,
            cities: [],
          });
          setSelectedLocations(newSelectedLocations);
        }
      } else {
        // if country is not exist
        setSelectedLocations([
          ...selectedLocations,
          {
            country: location.name,
            states: [
              {
                state: state.name,
                cities: [],
              },
            ],
          },
        ]);
      }
    } else {
      const newSelectedLocations = [...selectedLocations];
      const countryIndex = newSelectedLocations.findIndex(
        (item) => item.country === location.name
      );
      const stateIndex = newSelectedLocations[countryIndex].states.findIndex(
        (item) => item.state === state.name
      );
      newSelectedLocations[countryIndex].states.splice(stateIndex, 1);
      // if states is not exist in the country then remove the country
      if (newSelectedLocations[countryIndex].states.length === 0) {
        newSelectedLocations.splice(countryIndex, 1);
      }
      setSelectedLocations(newSelectedLocations);
    }
  };

  const handleCity = (e, location, state, city) => {
    isCityExist(location.name, state.name, city.name);
    if (e.target.checked) {
      if (isCountryExist(location.name)) {
        if (isStateExist(location.name, state.name)) {
          if (isCityExist(location.name, state.name, city)) {
            // if city is already exist deselect the city
            return;
          } else {
            // find the country and add the city
            const newSelectedLocations = [...selectedLocations];
            const countryIndex = newSelectedLocations.findIndex(
              (item) => item.country === location.name
            );
            const stateIndex = newSelectedLocations[
              countryIndex
            ].states.findIndex((item) => item.state === state.name);
            newSelectedLocations[countryIndex].states[stateIndex].cities.push(
              city
            );
            setSelectedLocations(newSelectedLocations);
          }
        } else {
          // if state is not exist
          const newSelectedLocations = [...selectedLocations];
          const countryIndex = newSelectedLocations.findIndex(
            (item) => item.country === location.name
          );
          newSelectedLocations[countryIndex].states.push({
            state: state.name,
            cities: [city],
          });
          setSelectedLocations(newSelectedLocations);
        }
      } else {
        // if country is not exist
        setSelectedLocations([
          ...selectedLocations,
          {
            country: location.name,
            states: [
              {
                state: state.name,
                cities: [city],
              },
            ],
          },
        ]);
      }
    } else {
      const newSelectedLocations = [...selectedLocations];
      const countryIndex = newSelectedLocations.findIndex(
        (item) => item.country === location.name
      );
      const stateIndex = newSelectedLocations[countryIndex].states.findIndex(
        (item) => item.state === state.name
      );
      const cityIndex = newSelectedLocations[countryIndex].states[
        stateIndex
      ].cities.findIndex((item) => item === city);
      newSelectedLocations[countryIndex].states[stateIndex].cities.splice(
        cityIndex,
        1
      );
      // if cities is not exist in the state then remove the state
      if (
        newSelectedLocations[countryIndex].states[stateIndex].cities.length ===
        0
      ) {
        newSelectedLocations[countryIndex].states.splice(stateIndex, 1);
      }
      // if states is not exist in the country then remove the country
      if (newSelectedLocations[countryIndex].states.length === 0) {
        newSelectedLocations.splice(countryIndex, 1);
      }
      setSelectedLocations(newSelectedLocations);
    }
  };

  return (
    <section className="">
      <button
        type="button"
        class="btn btn-primary w-100"
        data-bs-toggle="modal"
        data-bs-target="#selectLocation"
      >
        Select Locations
      </button>

      {/* Modal */}
      <div class="modal fade" id="selectLocation">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="selectLocationLabel">
                Select Locations
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body container">
              {/* search */}
              <div class="input-group mb-3">
                <input
                  type="text"
                  ref={searchRef}
                  placeholder="Search by country or state or city name"
                  class="form-control"
                  onChange={(e) => {
                    const search = e.target.value;
                    const filteredLocations = locations.filter(
                      (location) =>
                        location.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        location.state.find((st) =>
                          st.name.toLowerCase().includes(search.toLowerCase())
                        ) ||
                        location.state.find((st) =>
                          st.city.find((ct) =>
                            ct.toLowerCase().includes(search.toLowerCase())
                          )
                        )
                    );
                    setSearchedLocations(filteredLocations);
                  }}
                />
                <button
                  class="btn btn-outline-secondary dropdown-toggle shadow-none"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li
                    class="dropdown-item"
                    onClick={() => {
                      setSearchedLocations(locations);
                      searchRef.current.value = '';
                    }}
                  >
                    All <span class="badge bg-primary">{locations.length}</span>
                  </li>
                  {locations.map((location) => (
                    <li
                      onClick={() => {
                        searchRef.current.value = location.name;
                        const search = location.name;
                        const filteredLocations = locations.filter((location) =>
                          location.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        );
                        setSearchedLocations(filteredLocations);
                      }}
                      class="dropdown-item"
                    >
                      {location.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* search */}
              <ul className="list-unstyled row">
                {searchedLocations
                  .sort((a, b) =>
                    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                  )
                  .map((location, index) => (
                    <li class="mb-1">
                      <div className="card mb-2">
                        <div class="form-check p-0 d-flex align-items-center">
                          {/* <input
                            class="form-check-input"
                            type="checkbox"
                            value={location.name}
                            checked={isCountryExist(location.name)}
                            onChange={(e) => {
                              handleCountry(e, location);
                            }}
                          /> */}
                          <button
                            class="btn fs-5 d-inline-flex gap-2 align-items-center justify-content-between rounded shadow-none flex-grow-1"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${location.name}-collapse`}
                            type="button"
                          >
                            {location.name}
                            <BsChevronDown />
                          </button>
                        </div>

                        <div
                          class={`collapse ms-3 ${index === 0 && 'show'}`}
                          id={`${location.name}-collapse`}
                        >
                          <ul class="list-unstyled fw-normal pb-1 ms-3 small">
                            {location.state
                              .sort((a, b) =>
                                a.name
                                  .toLowerCase()
                                  .localeCompare(b.name.toLowerCase())
                              )
                              .map((state, index) => (
                                <li class="mb-1">
                                  <div class="form-check d-flex align-items-center">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value={state.name}
                                      checked={isStateExist(
                                        location.name,
                                        state.name
                                      )}
                                      onChange={(e) => {
                                        handleState(e, location, state);
                                      }}
                                      id={`${location.name}-${state.name}`}
                                    />
                                    <button
                                      class="btn d-inline-flex align-items-center rounded gap-2 shadow-none"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#${location.name}-${state.name}-collapse`}
                                      type="button"
                                    >
                                      {state.name}
                                      <BsChevronDown />
                                    </button>
                                  </div>

                                  <div
                                    class="collapse ms-4 show"
                                    id={`${location.name}-${state.name}-collapse`}
                                  >
                                    <ul class="list-unstyled fw-normal pb-1 small">
                                      {state.city
                                        .sort((a, b) =>
                                          a
                                            .toLowerCase()
                                            .localeCompare(b.toLowerCase())
                                        )
                                        .map((city, index) => (
                                          <li key={index}>
                                            <div class="form-check">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value={city}
                                                checked={isCityExist(
                                                  location.name,
                                                  state.name,
                                                  city
                                                )}
                                                onChange={(e) => {
                                                  handleCity(
                                                    e,
                                                    location,
                                                    state,
                                                    city
                                                  );
                                                }}
                                                id={`${state.name}-${city}`}
                                              />
                                              <label
                                                style={{ cursor: 'pointer' }}
                                                class="form-check-label"
                                                for={`${state.name}-${city}`}
                                              >
                                                {city}
                                              </label>
                                            </div>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save Locations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFormTest2;
