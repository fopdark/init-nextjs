import { getAbout } from "@/services/introduce";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const res = await getAbout({});
  return {
    title: res?.seo?.alt,
  };
}

async function Introduce(props: any) {
  const data = await getAbout({});
  const htmlContent = { __html: data?.content || <p>Empty</p> };
  return (
    <div className=" dark:bg-gray-800 ">
      <div className="bg-gray-100 dark:bg-gray-800 py-8 max-w-[1200px] mx-auto py-0">
        {data && (
          <div
            className="p-5 ck-content text-white"
            dangerouslySetInnerHTML={htmlContent}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Introduce;
