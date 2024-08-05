'use client';

import { Avatar } from 'antd';
import React from 'react';
import Slider from 'react-slick';

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
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

function ReviewSlider() {
  return (
    <div className="py-5">
      <Slider {...settings}>
        {new Array(4).fill('').map((_, index) => (
          <div key={index}>
            <div
              className="flex gap-2 mx-2 p-2 border border-[#000080] rounded-2xl bg-blue-700"
              key={index}
            >
              <div>
                <Avatar
                  src="https://picsum.photos/200/300"
                  alt="avatar"
                  className="flex justify-center w-[300px] h-[300px]"
                  // size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                />
              </div>
              <div className=" flex flex-col justify-center text-white">
                <h3 className="font-bold text-xl mb-2 ">
                  Chị Duyên {index} - Chủ nhà hàng sông quê
                </h3>
                {/* <p className="text-sm">Quản Lý</p> */}
                <p>
                  Mua quầy pha chê ở đây đẹp và tiện ích lắm. Các bạn thợ lắp
                  đặt rất cẩn thật. Hài Lòng và sẽ ủng hộ tiếp tục!
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewSlider;
