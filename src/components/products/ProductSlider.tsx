"use client";

import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function ProductSlider({ products }: any) {
  console.log("ProductSlider", products);

  return (
    <div className="py-0">
      <Slider {...settings}>
        {products?.map((product: any) => (
          <div className="" key={product?._id}>
            <ProductCard
              img={product?.image?.[0]}
              name={product?.title}
              isPrice={false}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
