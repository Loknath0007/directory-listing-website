import React from 'react';
import { Carousel } from 'react-bootstrap';

const AdImage = () => {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.bikroy-st.com/49original-sony-bravia-smart-led-tv-for-sale-dhaka/240c059d-2822-4e1d-99b6-a32fb7390483/620/466/fitted.jpg"
      alt="First slide"
    />    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.bikroy-st.com/49original-sony-bravia-smart-led-tv-for-sale-dhaka/a4c677de-3795-4966-ba5a-b5fc4f62cbbb/620/466/fitted.jpg?text=Second slide&bg=eee"
      alt="Second slide"
    />
      </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.bikroy-st.com/49original-sony-bravia-smart-led-tv-for-sale-dhaka/43b45815-c482-498f-828f-5657c9d52090/620/466/fitted.jpg?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default AdImage;