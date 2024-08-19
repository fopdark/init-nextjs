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
        <SliderSlick data={slides} />
        <div className="max-w-[1200px] mx-auto py-0">
          {/* <div className="py-10">
            <div className="flex justify-center ">
              <h2 className="text-4xl sm:text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Dịch Vụ Nổi Bật
              </h2>
            </div>
            <div className="bg-white bg-gradient-to-r from-[#000080] to-indigo-300 h-full py-6 sm:py-8 lg:py-12 rounded-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/1.jpg"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Sơn Epoxy, sơn sàn
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/2.jpg"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Phủ sàn pu
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/8.jpg"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Chống thấm
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="/assets/img/compositer/2.jpg"
                      loading="lazy"
                      alt="Photo by Lorenzo Herrera"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Phủ FRP, phủ Compositer
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="/assets/img/compositer/5.jpg"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Đánh bóng bê tông
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/5.jpg"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Sơn thể thao
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* SERVICE */}
          <section className="py-10" id="services">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <h2 className="text-3xl sm:text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                  Dịch Vụ Nổi Bật
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service: any, index: number) => (
                  <div
                    key={service?._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={service?.images?.[0]?.url}
                      alt="wheat flour grinding"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-medium text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-base line-clamp-6 ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
                {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
                    alt="wheat flour grinding"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Wheat Flour Grinding
                    </h3>
                    <p className="text-gray-700 text-base">
                      Our wheat flour grinding service provides fresh,
                      high-quality flour to businesses and individuals in the
                      area. We use state-of-the-art equipment to grind wheat
                      into flour, and we offer a variety of flours to meet the
                      needs of our customers.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww"
                    alt="Coffee"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Gram Flour Grinding
                    </h3>
                    <p className="text-gray-700 text-base">
                      Our gram flour is perfect for a variety of uses, including
                      baking, cooking, and making snacks. It is also a good
                      source of protein and fiber.Our gram flour grinding
                      service is a convenient and affordable way to get the
                      freshest gram flour possible.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp"
                    alt="Coffee"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Jowar Flour Grinding
                    </h3>
                    <div className="text-gray-700 text-base">
                      Our jowar grinding service is a convenient and affordable
                      way to get fresh, high-quality jowar flour. We use
                      state-of-the-art equipment to grind jowar into a fine
                      powder, which is perfect for making roti, bread, and other
                      dishes.
                      <details>
                        <summary>Read More</summary>
                        <p>
                          Our jowar flour is also a good source of protein and
                          fiber, making it a healthy choice for your family.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Coffee"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Chilli pounding
                    </h3>
                    <div className="text-gray-700 text-base">
                      We specializes in the production of high-quality chili
                      powder. Our chili powder is made from the finest, freshest
                      chilies, and we use traditional pounding methods to ensure
                      that our chili powder retains its full flavor and aroma.
                      <details>
                        <summary>Read More</summary>
                        <p>
                          {" "}
                          We offer a variety of chili powder products, including
                          mild, medium, and hot. We also offer custom blends to
                          meet the specific needs of our customers.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                  <div className="text-center text-white font-medium">
                    Special product
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
                    alt="Coffee"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Flavoured Spaghetti
                    </h3>
                    <p className="text-gray-700 text-base">
                      <span className="font-medium underline">
                        Our speciality is
                      </span>
                      Bappa Flour Mill offers a variety of flavored spaghetti
                      dishes that are sure to tantalize your taste buds. We use
                      only the freshest ingredients Our flavors include: Mango,
                      spinach
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
                    alt="papad"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Rice Papad
                    </h3>
                    <div className="text-gray-700 text-base">
                      Our company produces high-quality rice papad that is made
                      with the finest ingredients. We use traditional methods to
                      make our papad, which gives it a unique flavor and
                      texture. Our papad is also gluten-free and vegan.
                      <details>
                        <summary>Read More</summary>
                        <p>
                          {" "}
                          We offer a variety of rice papad flavors, including
                          plain, salted, spicy, and flavored. We also offer a
                          variety of sizes and shapes to choose from. Our papad
                          is available in bulk or in individual packages.
                        </p>
                      </details>
                    </div>
                  </div>
                </div> */}
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
