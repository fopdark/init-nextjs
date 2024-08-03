import React from "react";
import ProductDetailSlider from "./Slider";

function ProductDetail(props: { data: any }) {
  const { data } = props;

  // const data = {
  //   _id: "66adb61adba5cf3586979fba",
  //   seo: {
  //     title: "seo title",
  //     alt: "alt",
  //     keyword: "keyword",
  //     content: "content",
  //     _id: "66adb61adba5cf3586979fbb",
  //   },
  //   title: "type: String",
  //   description: "type: String",
  //   color: [],
  //   image: [
  //     "https://imgs.search.brave.com/TmuC-ABekNMwlHmZAAHY7FrzNZMsijp-9O1vtZeuv14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EQUlMWV9f/MV8zZDI4MWUwYS0w/Zjg3LTRlNDMtOWZl/ZS04N2MyOTY4YTgz/OWIuanBnP3Y9MTcx/MjI0MDA2NiZ3aWR0/aD0xODAw",
  //     "https://imgs.search.brave.com/fWwTGxT8ulZNkWDgPC4_lynV0zYTqypDQdWVwZXfRaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXNraW5jYXJlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9VbnRpdGxl/ZF9kZXNpZ25fNzIu/d2VicD92PTE3MTc4/NDk3MjUmd2lkdGg9/MTIwMA",
  //   ],
  //   content: "type: String",
  //   index: 1,
  //   created_at: "2024-08-03T04:46:18.442Z",
  //   update_at: "2024-08-03T04:46:18.443Z",
  //   __v: 0,
  //   slug: "product-slug",
  // };

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
                {/* <ProductDetailSlider data={data?.image}/> */}
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
                {data?.title}
              </h2>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Color:
                </span>
                <div className="flex items-center mt-2 gap-2">
                  {data?.color.map((color: string, index: number) => (
                    <button
                      className={`w-6 h-6 rounded-full` }
                      style={{
                        background: color
                      }}
                    ></button>
                  ))}
                  {/* <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button> */}
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
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Mô tả:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>
    </div>
  );
}

export default ProductDetail;
