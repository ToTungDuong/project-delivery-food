import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import "../../../style/slider.css";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinit: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          amet beatae eum officia facilis maiores iste aut suscipit, corporis
          tenetur aliquam sunt unde numquam debitis, eos quas? Quidem, magni
          tempore.
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava01} alt="" className=" rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          amet beatae eum officia facilis maiores iste aut suscipit, corporis
          tenetur aliquam sunt unde numquam debitis, eos quas? Quidem, magni
          tempore.
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava02} alt="" className=" rounded" />
          <h6>Katy Lady</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          amet beatae eum officia facilis maiores iste aut suscipit, corporis
          tenetur aliquam sunt unde numquam debitis, eos quas? Quidem, magni
          tempore.
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava03} className=" rounded" alt="" />
          <h6>Phil Foden</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
