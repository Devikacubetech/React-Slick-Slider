import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import sliderimg1 from '../../public/images/sliderimg1.jpeg';
import sliderimg2 from '../../public/images/sliderImg2.jpeg';
import sliderimg3 from '../../public/images/sliderimg3.jpeg';
import sliderimg4 from '../../public/images/sliderImg4.jpeg';
import sliderimg5 from '../../public/images/sliderImg5.jpeg';
import sliderimg6 from '../../public/images/sliderImg6.jpeg';
import { Container } from 'react-bootstrap';


function CustomizArrows() {
  const setting1 = {
    slidesToShow: 3,
    dots: false,
    // centerMode : true,
    // centerPadding : '80px',
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // please check global.scss for this slider
    <section className="mt-5 pt-5">
      <Container>
        <h2 className="text-center pt-5"> Customize Arrows of Slick Slider </h2>
        <Slider {...setting1} className=" pt-5 mt-5 slider-img-customize customize-arrows-slider">
          <div className="px-3">
            <Image src={sliderimg1} alt="slider-img" className="img-fluid rounded" />
          </div>
          <div className="px-3">
            <Image src={sliderimg2} alt="slider-img" className="img-fluid rounded" />
          </div>
          <div className="px-3">
            <Image src={sliderimg3} alt="slider-img" className="img-fluid rounded" />
          </div>
          <div className="px-3">
            <Image src={sliderimg4} alt="slider-img" className="img-fluid rounded" />
          </div>
          <div className="px-3">
            <Image src={sliderimg5} alt="slider-img" className="img-fluid rounded" />
          </div>
          <div className="px-3">
            <Image src={sliderimg6} alt="slider-img" className="img-fluid rounded" />
          </div>
        </Slider>
      </Container>
    </section>
  );
}

export default CustomizArrows