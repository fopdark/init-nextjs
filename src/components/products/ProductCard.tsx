"use client";

import { getImageURL } from "@/utils/common";
import { Card } from "antd";
import React from "react";

const { Meta } = Card;
function ProductCard(props: any) {
  return (
    <div className="px-2">
      <Card
        cover={
          <img
            alt={props?.data?.seo?.alt}
            src={getImageURL(props?.data?.images?.[0]?.path)}
            className="border border-[#F0F0F0] aspect-[6/4]"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/assets/img/default.jpg";
            }}
          />
        }
      >
        <Meta
          title={props?.data?.title}
          description={
            <div className="text-black text-ellipsis overflow-hidden w-full line-clamp-5">
              {props?.data?.description}
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default ProductCard;
