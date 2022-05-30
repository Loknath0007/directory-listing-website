import React from 'react';
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

const handleSubmit = (e) => {
  e.preventDefault();
  console.log({
    title: e.target.title.value,
    description: e.target.description.value,
    // locations: selectedLocations,
  });
};

const PostAd = () => {
  return (
    <>
      <Header />
      <section className="container py-5" style={{ maxWidth: '756px' }}>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <Title />
          {/* End of Title */}

          {/* Description */}
          <Description />
          {/* End of Description */}

          {/* Category */}
          <Category />
          {/* End of Category */}

          {/* Brand */}
          <Brand />
          {/* End of Brand */}

          {/* Model */}
          <Model />
          {/* End of Model */}

          {/* Price */}
          <Price />
          {/* End of Price */}

          {/* Price Type */}
          <PriceType />
          {/* End of Price Type */}

          {/* condition */}
          <Condition />
          {/* end of condition */}

          {/* Locations */}
          <Locations />
          {/* End of Locations */}

          {/* Images */}
          <Images />
          {/* End of Images */}

          {/* Contact Details */}
          <ContactDetails />
          {/* End of Contact Details */}

          {/* Submit button */}
          <div class="d-grid gap-2 col-6 ms-auto my-5">
            <button class="btn btn-primary" type="submit">
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
