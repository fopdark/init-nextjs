import {
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
        <div
          className="p-5 ck-content text-black"
          dangerouslySetInnerHTML={{ __html: service?.content || <p>Empty</p> }}
        ></div>
      </section>
    </div>
  );
}

export default Service;
