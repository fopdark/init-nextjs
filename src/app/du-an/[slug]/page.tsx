import Detail from "@/components/project/Detail";
import { getProjectBySlug, getProjects } from "@/services/project";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const res = await getProjectBySlug(slug);
  return {
    title: res?.seo?.alt,
  };
}

async function Product({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getProjectBySlug(slug);
  return (
    <div>
      <Detail data={res} />
    </div>
  );
}

export default Product;
