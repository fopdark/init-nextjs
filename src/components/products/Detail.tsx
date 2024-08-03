import React from "react";

function ProductDetail(props: any) {
  return (
    <div className=" dark:bg-gray-800 ">
      <div className="bg-gray-100 dark:bg-gray-800 py-8 max-w-[1200px] mx-auto py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                {/* <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div> */}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Product Name
              </h2>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Liên hệ:
                </span>
                <div className="mt-2 flex gap-2">
                  <a className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="messenger icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      // style="color:transparent"
                      src="/assets/icons/messenger.png"
                    />
                  </a>
                  <a className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="zalo icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      // style="color:transparent"
                      src="/assets/icons/zalo.png"
                    />
                  </a>
                  <a className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="phone icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      // style="color:transparent"
                      src="/assets/icons/phone.png"
                    />
                  </a>
                  {/*<a className="hover:scale-110" target="_blank" href="/">
                  <img
                    alt="linkedin icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    // style="color:transparent"
                    src="/assets/icons/linkedin.png"
                  />
                </a>
                <a className="hover:scale-110" target="_blank" href="/">
                  <img
                    alt="instagram icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    // style="color:transparent"
                    src="/assets/icons/instagram.png"
                  />
                </a>
                <a className="hover:scale-110" target="_blank" href="">
                  <img
                    alt="twitter icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    // style="color:transparent"
                    src="/assets/icons/twitter.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.youtube.com/"
                >
                  <img
                    alt="youtube icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    // style="color:transparent"
                    src="/assets/icons/youtube.png"
                  />
                </a> */}
                </div>
                {/* <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div> */}
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Mô tả:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {" "}
            1. Bài viết quảng cáo sơn nhà
          </h1>{" "}
          – Content bán sơn nước Nippon Spot-less Plus Sơn Nippon Spot-less Plus
          Thông tin sản phẩm Nippon Paint SPOT-LESS PLUS là sản phẩm sơn phủ nội
          thất cao cấp vượt bậc với Công nghệ Chống Bám Bẩn (Anti-Stain
          Technology) giúp màng sơn có khả năng chống bám bẩn tuyệt vời đối với
          các vết bẩn sinh hoạt như trà, rượu, cà phê, mực, dấu tay, son môi,
          nước trái cây, v.v. Ngoài ra, SPOT-LESS PLUS còn được trang bị Công
          nghệ Ion Bạc (Silver Ion Technology) có khả năng kháng 99.9% vi rút
          COVID-19 (SARS-CoV-2), các vi rút và vi khuẩn độc hại khác tồn tại
          trên bề mặt tường. Màu sắc của màng sơn bền, đẹp và đa dạng… Ghi chú:
          Khả năng chống bám bẩn tuyệt vời là do SPOT-LESS PLUS không chỉ kháng
          lại sự thẩm thấu của các chất bẩn vào màng sơn mà còn tạo hiệu ứng
          “giọt” đối với các loại chất bẩn này. Chất bẩn lỏng ưa nước sẽ tạo
          thành dạng giọt trên màng sơn và lăn xuống do đó làm cho màng sơn dễ
          chùi rửa hơn. Đặc điểm: – Chống bám bẩn tuyệt vời với Anti-Stain
          Technology kháng lại sự thẩm thấu của các chất bẩn vào màng sơn và tạo
          hiệu ứng “giọt’’ đối với chất bẩn lỏng ưa nước. – Khả năng lau chùi
          vết bẩn tuyệt vời – Kháng vi rút (kháng hiệu quả đối với các loại vi
          rút có hại như SARS-CoV-2) với Silver Ion Technology. 99.9% kháng hiệu
          quả đối với vi rút COVID-19 (SARS-CoV-2) – Sản phẩm cao cấp vượt bậc
          với công nghệ màu sắc tiến tiến mang lại trải nghiệm sáng tạo với đa
          dạng màu sắc, đẹp với độ bền màu cao. – Kháng vi khuẩn (kháng hiệu quả
          các loại vi khuẩn có hại khi tồn tại trên bề mặt tường như E. Coli,
          Staphylococcus Aureus, Salmonella typhimurium, Shigella flexneri,
          Pseudomonas aeruginosa, Klebsiella pneumoniae, Listeria monocytogenes)
          – Khả năng ngăn thấm nước từ bên ngoài và chống nấm mốc tốt – Độ che
          phủ và bao phủ cao – Mùi rất nhẹ trong khi thi công sơn và sau khi khô
          – Không độc hại, không chứa APEO, không chứa Chì, Thuỷ Ngân và các Kim
          loại nặng – Hàm lượng chất hữu cơ bay hơi rất thấp (nhỏ hơn 10g/L VOC,
          đáp ứng yêu cầu an toàn về môi trường) – Sản phẩm đạt Green Label LƯU
          Ý: SPOT-LESS PLUS giảm sự lây truyền của vi rút và vi khuẩn thông qua
          quá trình khử hoạt tính trên bề mặt đã sơn. Sản phẩm không đảm bảo khả
          năng miễn nhiễm của người sử dụng đối với vi rút và vi khuẩn Liên hệ:
          0978721138 Số 382 Hùng Vương, Tam Kỳ, Quảng Nam Tư vấn nhiệt tình Miễn
          phí vận chuyển Chiết khấu hấp dẫn Bảo hành chất lượng Đánh giá: 9.5/10
          điểm
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
