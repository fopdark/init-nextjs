import React from "react";
import Link from "antd/es/typography/Link";
import MenuAntd from "./Menu";

function Header(props: any) {
  console.log("props", props)
  return (
    <>
      <div className="bg-[#000080]">
        <div className=" flex justify-between max-w-[1200px] mx-auto p-4">
          <div className="hidden lg:flex gap-2">
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Trang chủ
            </Link>
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Giới thiệu
            </Link>
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Tư vấn
            </Link>
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Liên hệ
            </Link>
          </div>
          <div className=" flex items-center gap-2">
            <b className="!text-white">Hotline:</b>
            <Link className="!text-white" href="tel:+84915441511">
              0915.441.511 ( Mr.Duy)
            </Link>
            <p className="text-white">-</p>
            <Link className="!text-white" href="tel:+84912851511">
              0912. 851.511 (Ms.Thư)
            </Link>
          </div>
        </div>
      </div>
      <MenuAntd />
    </>
  );
}

export default Header;
