import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import sliderimg5 from '../../public/images/sliderImg5.jpeg';
import sliderimg6 from '../../public/images/sliderImg6.jpeg';
import sliderimg7 from '../../public/images/sliderImg7.jpeg';
import sliderimg8 from '../../public/images/sliderImg8.jpeg';
import sliderimg9 from '../../public/images/sliderImg9.jpeg';
import sliderimg10 from '../../public/images/sliderImg10.jpeg';

function ReverseAutoPlay() {
  const setting1 = {
    slidesToShow: 5,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-5 pt-5">
      <h2 className="text-center pt-5"> Reverse AutoPlay  Slider</h2>
      <Slider {...setting1} className="slider3 pt-5 mt-5 slider-img-customize">
        <div className="px-3">
          <Image src={sliderimg7} alt="slider-img" className="img-fluid rounded" />
        </div>
        <div className="px-3">
          <Image src={sliderimg8} alt="slider-img" className="img-fluid rounded" />
        </div>
        <div className="px-3">
          <Image src={sliderimg9} alt="slider-img" className="img-fluid rounded" />
        </div>
        <div className="px-3">
          <Image src={sliderimg10} alt="slider-img" className="img-fluid rounded" />
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

export default ReverseAutoPlay;
