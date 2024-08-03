import ProductDetail from "@/components/products/Detail";
import { getProductBySlug, getProductSlug, getProducts } from "@/services/product";
import { getSliderList } from "@/services/slider";
import React from "react";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    slug: product.slug,
  }))
  // return [{ productID: "1" }];
}

async function Product({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getProductBySlug(slug);
  return (
    <div>
      <ProductDetail data={res}/>
    </div>
  );
}

export default Product;
