import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import sliderimg1 from '../../public/images/sliderimg1.jpeg';
import sliderimg2 from '../../public/images/sliderImg2.jpeg';
import sliderimg3 from '../../public/images/sliderimg3.jpeg';
import sliderimg4 from '../../public/images/sliderImg4.jpeg';
import sliderimg5 from '../../public/images/sliderImg5.jpeg';
import sliderimg6 from '../../public/images/sliderImg6.jpeg';

function HalfPreviousSlide() {
  const setting1 = {
    slidesToShow: 4.5,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    // please check global.scss for this slider (slick-list)
    <section className="mt-5 pt-5">
      <h2 className="text-center pt-5"> Half Previous Slide Slick  Slider</h2>
      <Slider {...setting1} className=" pt-5 mt-5 slider-img-customize">
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
    </section>
  );
}

export default HalfPreviousSlide