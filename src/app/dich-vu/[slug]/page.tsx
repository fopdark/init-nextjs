import { DOMAIN_URL } from "@/constants/Common";
import {
  getServicesByParentSlug,
  getServices,
  getServiceSlug,
  getServiceSlugMapping,
} from "@/services/service";
import { getImageURL } from "@/utils/common";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const slugMapping = await getServiceSlugMapping();
  return slugMapping.map((item: any) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const res = await getServiceSlug(slug);
  return {
    title: res?.seo?.alt,
  };
}

async function Service({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const childServices = await getServicesByParentSlug({ parent_slug: slug });
  const service = await getServiceSlug(slug);
  const slugMapping = await getServiceSlugMapping();
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
      <section className="py-10" id="services">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Dịch vụ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {childServices?.map((child: any, index: number) => (
              <Link
                key={index}
                href={`${DOMAIN_URL}/dich-vu/${slug}/${child?.slug}`}
              >
                <div
                  key={child?._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={getImageURL(child?.images?.[0]?.path)}
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
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 py-8 max-w-[1200px] mx-auto py-0">
          {service && (
            <div
              className="p-5 ck-content text-black"
              dangerouslySetInnerHTML={{
                __html: service?.content || <p>Empty</p>,
              }}
            ></div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Service;
