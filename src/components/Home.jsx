import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lfic1 from "../assets/lfic1.jpg";
import lfic2 from "../assets/lfic2.jpg";
import lfic3 from "../assets/lfic3.jpg";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 max-h-60 ">
      <Slider {...settings}>
        <div>
          <img src={lfic1} alt="living_faith_international_church_1" />
        </div>
        <div>
          <img src={lfic2} alt="living_faith_international_church_2" />
        </div>
        <div>
          <img src={lfic3} alt="living_faith_international_church_3" />
        </div>
      </Slider>
    </div>
  );
}

export default Home;
