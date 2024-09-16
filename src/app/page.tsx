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

// export const getServerSideProps: GetServerSideProps = async () => {
//   let res = {}
//   try {
//     const res = await getSliderList({});

//   } catch (error) {
//     console.log("error", error);
//   }
//    return { props: { res } };
// };

export default async function Home({ res }: any) {
  const slides = await getSliderList({});
  const products = await getProducts();
  const services = await getServices();
  const projects = await getProjects();
  return (
    <>
      <div>
        {/* <p className="text-black">{JSON.stringify(services)}</p> */}
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
                      <div className="p-6 text-center">
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
                  <p className="text-white">
                    Nếu quý khách mua sơn tại DiepKienHuy, chúng tôi sẽ tư vấn
                    cho bạn những thông tin chi tiết về từng loại sơn. Nếu quý
                    khách muốn đặt mua sơn tại DiepKienHuy, xin vui lòng liên hệ
                    trực tiếp với chúng tôi để nhận được sự hỗ trợ, tận tình
                    nhất từ đội ngũ nhân viên của chúng tôi. DiepKienHuy rất
                    mong nhận được nhiều hơn nữa sự quan tâm và ủng hộ từ khách
                    hàng để ngày càng phát triển hơn nữa trong tương lai. Chúng
                    tôi rất hân hạnh đón tiếp quý khách.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-2 ">
                  <Avatar
                    src="/assets/img/construction/process.png"
                    size={60}
                  />
                  <p className="font-bold text-xl sm:text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Quy Trình Chuyên Nghiệp
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <Avatar
                    src="/assets/img/construction/teamwork.png"
                    size={60}
                  />
                  <p className="font-bold text-xl sm:text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Đội Ngũ Kỹ Thuật Giỏi
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar src="/assets/img/construction/award.png" size={60} />
                  <p className="font-bold text-xl sm:text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Quy Trình Đạt Chuẩn
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar src="/assets/img/construction/star.png" size={60} />
                  <p className="font-bold text-xl sm:text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Hậu Mãi Tốt
                  </p>
                </div>
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
