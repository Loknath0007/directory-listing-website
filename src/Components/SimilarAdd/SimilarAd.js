import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import SingleSimilarAd from '../SingleSimilarAd/SingleSimilarAd';
const SimilarAd = () => {
  const arr = [1, 2, 3, 4];

  return (
    <div className="my-3 bg-light p-2">
      <h5>Similar Ads</h5>
      <hr />

      <Carousel variant="dark">
        <Carousel.Item>
          <Row xs={1} md={2} className="g-2">
            {arr.map((i) => (
              <div className=" ">
                <Col>
                  <SingleSimilarAd></SingleSimilarAd>
                </Col>
              </div>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-2">
            {arr.map((i) => (
              <div className=" ">
                <Col>
                  <SingleSimilarAd></SingleSimilarAd>
                </Col>
              </div>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-2">
            {arr.map((i) => (
              <div className=" ">
                <Col>
                  <SingleSimilarAd></SingleSimilarAd>
                </Col>
              </div>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SimilarAd;
