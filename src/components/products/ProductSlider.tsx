"use client";

import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { DOMAIN_URL } from "@/constants/Common";

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
  return (
    <div className="py-0">
      <Slider {...settings}>
        {products?.map((product: any) => (
          <div className="" key={product?._id}>
            <Link href={`${DOMAIN_URL}/products/${product?.slug}`}>
              <ProductCard data={product} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
