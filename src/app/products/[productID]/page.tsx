import ProductDetail from "@/components/products/Detail";
import React from "react";

export function generateStaticParams() {
  return [{ productID: "1" }];
}

function Product({ params }: { params: { productID: string } }) {
  const { productID } = params;
  return (
    <div>
      <ProductDetail />
    </div>
  );
}

export default Product;
