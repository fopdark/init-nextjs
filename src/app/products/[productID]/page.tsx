import React from "react";

export function generateStaticParams() {
  return [{ productID: "1" }];
}

function Product({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>Product page {id}</div>;
}

export default Product;
