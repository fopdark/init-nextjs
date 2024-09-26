import ProductDetail from "@/components/products/Detail";
import { getProductBySlug, getProducts } from "@/services/product";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    slug: product.slug,
  }));
  // return [{ productID: "1" }];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const product = await getProductBySlug(slug);
  return {
    title: product?.seo?.alt,
  };
}

async function Product({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getProductBySlug(slug);
  return (
    <div>
      <ProductDetail data={res} />
    </div>
  );
}

export default Product;
