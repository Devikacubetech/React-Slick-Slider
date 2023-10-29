import Image from 'next/image';
import React, { useContext } from 'react';
import Slider from 'react-slick';
import sliderimg1 from '../../public/images/sliderimg1.jpeg'
import sliderimg2 from '../../public/images/sliderImg2.jpeg'
import sliderimg3 from '../../public/images/sliderimg3.jpeg'
import sliderimg4 from '../../public/images/sliderImg4.jpeg'
import sliderimg5 from '../../public/images/sliderImg5.jpeg'
import sliderimg6 from '../../public/images/sliderImg6.jpeg'
import { myContext } from './Contextapi';

function Slider1() {
  const setting1 = {
    slidesToShow: 5,
    dots: true,
    Infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const { mode } = useContext(myContext);
  return (
    <section>
      <h2 className="text-center py-5">Simple React Slick Slider</h2>
      <Slider {...setting1} className="slider1 slider-img-customize">
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

export default Slider1;
