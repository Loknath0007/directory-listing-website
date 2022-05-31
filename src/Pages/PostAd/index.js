import React, { useState } from 'react';
import Header from '../common/Header';
import {
  Brand,
  Category,
  Condition,
  ContactDetails,
  Description,
  Images,
  Locations,
  Model,
  Price,
  PriceType,
  Title,
} from './formFields';

const PostAd = () => {
  const [adPostData, setAdPostData] = useState({
    title: '',
    description: '',
    brand: '',
    model: '',
    price: '',
    priceType: '',
    condition: '',
    category: {},
    locations: [],
    images: [],
    contactDetails: {},
  });

  const setData = (key, value) =>
    setAdPostData({
      ...adPostData,
      [key]: value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adPostData);
  };

  return (
    <>
      <Header />
      <section className="container py-5" style={{ maxWidth: '756px' }}>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <Title setData={setData} />
          {/* End of Title */}

          {/* Description */}
          <Description setData={setData} />
          {/* End of Description */}

          {/* Category */}
          <Category setData={setData} />
          {/* End of Category */}

          {/* Brand */}
          <Brand setData={setData} />
          {/* End of Brand */}

          {/* Model */}
          <Model setData={setData} />
          {/* End of Model */}

          {/* Price */}
          <Price setData={setData} />
          {/* End of Price */}

          {/* Price Type */}
          <PriceType setData={setData} />
          {/* End of Price Type */}

          {/* condition */}
          <Condition setData={setData} />
          {/* end of condition */}

          {/* Locations */}
          <Locations setData={setData} />
          {/* End of Locations */}

          {/* Images */}
          <Images setData={setData} />
          {/* End of Images */}

          {/* Contact Details */}
          <ContactDetails setData={setData} />
          {/* End of Contact Details */}

          {/* Submit button */}
          <div className="d-grid gap-2 col-6 ms-auto my-5">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          {/* End of Submit button */}
        </form>
      </section>
    </>
  );
};

export default PostAd;
