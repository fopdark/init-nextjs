import {
  getServiceSlugMapping,
  getServices,
  getServiceSlug,
} from "@/services/service";
import { getImageURL } from "@/utils/common";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const slugMapping = await getServiceSlugMapping();
  return slugMapping.map((item: any) => ({
    slug: item.slug,
    slugChild: item.slugChild,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; slugChild: string };
}): Promise<Metadata> {
  const { slugChild } = params;

  const res = await getServiceSlug(slugChild);
  return {
    title: res?.seo?.alt,
  };
}

async function Service({
  params,
}: {
  params: { slug: string; slugChild: string };
}) {
  const { slug, slugChild } = params;
  const service = await getServiceSlug(slugChild);

  return (
    <div className="bg-grey">
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src={getImageURL(service?.images?.[0]?.path)}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              {service?.title}
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
      <section className="py-0" id="services">
        <div className=" ">
          <div className="bg-gray-100 py-8 max-w-[1200px] mx-auto py-0">
            <div
              className="p-5 ck-content text-black"
              dangerouslySetInnerHTML={{
                __html: service?.content || <p>Empty</p>,
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
