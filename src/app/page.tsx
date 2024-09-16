/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { Avatar } from "antd";

import ProductSlider from "@/components/products/ProductSlider";
import ProjectSlider from "@/components/project/ProjectSlider";
import ReviewSlider from "@/components/reviews/ReviewSlider";
import SliderSlick from "@/components/Slider";
import { getSliderList } from "@/services/slider";
import { getProducts } from "@/services/product";
import Request from "@/components/Request";
import { getServices } from "@/services/service";
import { getProjects } from "@/services/project";
import Link from "next/link";
import { getImageURL } from "@/utils/common";
import { getBenefit } from "@/services/benefit";

export default async function Home({ res }: any) {
  const slides = await getSliderList({});
  const products = await getProducts();
  const services = await getServices();
  const projects = await getProjects();
  const benefit = await getBenefit();
  return (
    <>
      <div>
        <p className="text-black">{JSON.stringify(benefit)}</p>
        <SliderSlick data={slides} />
        <div className="max-w-[1200px] mx-auto py-0">
          {/* SERVICE */}
          <section className="py-10" id="services">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <h2 className="text-3xl sm:text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                  Dịch Vụ Nổi Bật
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services?.map((service: any, index: number) => (
                  <Link href={service?.link} key={service?._id}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={getImageURL(service?.images?.[0]?.path)}
                        alt="wheat flour grinding"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6 text-center h-[230px]">
                        <h3 className="text-xl font-medium text-gray-800 mb-2">
                          {service?.title}
                        </h3>
                        <p className="text-gray-700 text-base line-clamp-6 ">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <div className="max-w-[1200px] mx-auto py-10 px-8">
            <div className="flex justify-center">
              <h2 className="text-3xl sm:text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Vì Sao Nên Chọn Chúng Tôi
              </h2>
            </div>
            {/* <News /> */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-4 ">
              <div>
                <div className=" shadow-md bg-gradient-to-tr from-[#000080] to-green-300 rounded-lg p-10 h-full">
                  <p className="text-white">{benefit?.content}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-2">
                {benefit?.advantages?.map((advantage: any) => (
                  <div
                    key={advantage?._id}
                    className="flex items-center gap-2 "
                  >
                    <Avatar
                      src={getImageURL(advantage?.img_source?.path)}
                      size={60}
                    />
                    <p className="font-bold text-xl sm:text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                      {advantage?.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center">
              <h2 className="text-3xl sm:text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Sản Phẩm Nổi Bật
              </h2>
            </div>
            <ProductSlider products={products} />
          </div>
          <div className="py-10">
            <div className="flex justify-center">
              <h2 className="text-3xl sm:text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Công Trình Đã Thi Công
              </h2>
            </div>
            <ProjectSlider data={projects} />
          </div>
          <Request />

          {/* <div className="grid grid-cols-2"> */}
          <div className="px-5 py-10">
            <div className="flex justify-center">
              <h2 className="text-3xl sm:text-4xl text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Đánh Giá Khách Hàng
              </h2>
            </div>
            <p className="text-center text-black">
              Cùng với đội ngũ nhân viên giàu kinh nghiệm và nhiệt huyết luôn
              nhận được sự ủng hộ thường xuyên
            </p>
            <ReviewSlider />
          </div>
        </div>
      </div>
    </>
  );
}
