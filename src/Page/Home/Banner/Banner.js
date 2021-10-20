import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/1.jpg';
import banner2 from '../../../image/2.jpg';
import banner3 from '../../../image/3.jpg'


const Banner = () => {
    return (
        <>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text- info fs-1" > Our Ultramodern Operation lab</h3>
      <p className=" text-yellow fs-4" >An operating theater is a facility within a hospital where surgical operations are carried out in an aseptic environment</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-primary fs-1" > Our Won noiseless Hospital Campas </h3>
      <p className="text-primary fs-4" >Find Best Cancer Hospitals In Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-black fs-1 " > Avalable ICU Bed </h3>
      <p className="text-black fs-4" >An intensive care unit (ICU), also known as an intensive therapy unit or intensive treatment unit (ITU) or critical care unit (CCU), is a special department</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;