"use client";

import { getServicesByParentSlug } from "@/services/service";
import { getImageURL } from "@/utils/common";
import { Avatar, Button } from "antd";
import React, { useEffect } from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function ReviewSlider({ data }: any) {
  const handleGetList = async () => {
    const childServices = await getServicesByParentSlug({
      parent_slug: "son-epoxy-son-san",
    });
    console.log("childServices", childServices);
  };

  useEffect(() => {
    handleGetList();
  }, []);
  return (
    <div className="py-5">
      <Slider {...settings}>
        {data?.map((feedback: any, index: number) => (
          <div key={index}>
            <div
              className="flex gap-2 mx-2 p-2 border border-[#000080] rounded-2xl bg-blue-700"
              key={index}
            >
              <div className="flex items-start">
                <Avatar
                size={80}
                  src={getImageURL(feedback?.image_url?.path)}
                  alt="avatar"
                  className="flex justify-center w-[300px] h-[300px]"
                />
              </div>
              <div className="flex flex-col justify-start text-white h-[126px]">
                <h3 className="font-bold text-xl mb-2">{feedback?.title}</h3>
                <p className="line-clamp-3">{feedback?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewSlider;
