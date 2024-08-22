import {
  getServicesByParentSlug,
  getServices,
  getServiceSlug,
} from "@/services/service";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const service = await getServices();
  return service.map((item: any) => ({
    slug: item.slug,
  }));
}

async function Service({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const childServices = await getServicesByParentSlug({ parent_slug: slug });
  const service = await getServiceSlug(slug);

  return (
    <div className="bg-grey">
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src={service?.images?.[0]?.url}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              {service.title}
            </h1>
            <p className="font-regular text-xl mb-8 mt-4 line-clamp-1">
              {service.description}
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Liên hệ với chúng tôi
            </a>
          </div>
        </div>
      </div>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Dịch vụ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {childServices?.map((child: any, index: number) => (
              <Link key={index} href={`/services/${slug}/${child?.slug}`}>
                <div
                  key={child?._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={child?.images?.[0]?.url}
                    alt="wheat flour grinding"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {child.title}
                    </h3>
                    <p className="text-gray-700 text-base line-clamp-6">
                      {child.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={service?.images?.[0]?.url}
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Gram Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source
                  of protein and fiber.Our gram flour grinding service is a
                  convenient and affordable way to get the freshest gram flour
                  possible.
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
                  Our jowar grinding service is a convenient and affordable way
                  to get fresh, high-quality jowar flour. We use
                  state-of-the-art equipment to grind jowar into a fine powder,
                  which is perfect for making roti, bread, and other dishes.
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
                  We specializes in the production of high-quality chili powder.
                  Our chili powder is made from the finest, freshest chilies,
                  and we use traditional pounding methods to ensure that our
                  chili powder retains its full flavor and aroma.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      {" "}
                      We offer a variety of chili powder products, including
                      mild, medium, and hot. We also offer custom blends to meet
                      the specific needs of our customers.
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
                  Bappa Flour Mill offers a variety of flavored spaghetti dishes
                  that are sure to tantalize your taste buds. We use only the
                  freshest ingredients Our flavors include: Mango, spinach
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
                  Our company produces high-quality rice papad that is made with
                  the finest ingredients. We use traditional methods to make our
                  papad, which gives it a unique flavor and texture. Our papad
                  is also gluten-free and vegan.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to choose from. Our papad is available in
                      bulk or in individual packages.
                    </p>
                  </details>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
