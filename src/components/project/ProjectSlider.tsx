"use client";

import React from "react";
import Slider from "react-slick";
import ProjectNew from "./ProjectNew";
import { getImageURL } from "@/utils/common";
import { DOMAIN_URL } from "@/constants/Common";
import Link from "next/link";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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

interface Props {
  data: any;
}
function ProjectSlider({ data }: Props) {
  return (
    <div className="py-0">
      <Slider {...settings}>
        {data?.map((project: any, index: number) => (
          <div className="px-[1px]" key={index}>
            <Link href={`${DOMAIN_URL}/du-an/${project?.slug}`}>
              <ProjectNew
                img={getImageURL(project?.images?.[0]?.path)}
                location={project?.description}
                name={project?.title}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
