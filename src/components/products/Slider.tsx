"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";

function ProductDetailSlider(props: any) {
  const { data } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {data?.length > 0 &&
          data.map((slide: any, index: number) => (
            <div key={index} className="">
              <img
                src={slide}
                // className="w-full h-[30vh] lg:h-[50vh]"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ProductDetailSlider;
