import Detail from "@/components/project/Detail";
import { getProjectBySlug, getProjects } from "@/services/project";
import React from "react";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
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
