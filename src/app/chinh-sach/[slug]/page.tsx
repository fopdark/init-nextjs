import PolicyDetail from "@/components/policy/Detail";
import { getPolicy, getPolicyBySlug } from "@/services/policy";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const policy = await getPolicy();
  return policy.map((item: any) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const res = await getPolicyBySlug(slug);
  return {
    title: res?.seo?.alt,
  };
}

async function Policy({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getPolicyBySlug(slug);
  return (
    <>
      <PolicyDetail data={res} />
    </>
  );
}

export default Policy;
