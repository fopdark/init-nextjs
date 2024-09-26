"use client";
import { getImageURL } from "@/utils/common";
import { Image } from "antd";
import React, { useState } from "react";

const ProducImage = (props: any) => {
  const { images } = props;

  const [selectedImage, setSelectedImage] = useState(
    getImageURL(images?.[0]?.path)
  );
  const settings = {
    customPaging: (index: number) => {
      return (
        <a>
          <div className="w-20 h-20">
            <img
              className="object-cover"
              src={getImageURL(images?.[index]?.path) || ""}
            />
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full px-4 mb-8">
      <div className="w-full rounded-lg shadow-md mb-4 h-[300px] sm:h-[480px]">
        <Image
          width={"100%"}
          height={"100%"}
          src={selectedImage}
          alt="Product"
          preview={{
            mask: <p>Phóng to</p>,
          }}
        />
      </div>
      <div className="flex gap-4 py-4 justify-center overflow-x-auto w-full max-w-[500px]">
        {images.map((image: any, index: number) => (
          <img
            key={index}
            src={getImageURL(image?.path)}
            alt={`Thumbnail ${index}`}
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onClick={() => setSelectedImage(getImageURL(image?.path))}
          />
        ))}
      </div>
    </div>
  );
};

export default ProducImage;
