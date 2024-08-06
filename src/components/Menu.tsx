"use client";

import type { MenuProps } from "antd";
import { ConfigProvider, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { MENU } from "@/constants/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuAntd: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter()

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    router.push(e?.key)
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            padding: 8,
            fontSize: 18,
          },
        },
      }}
    >
      <div className="bg-white sticky top-0 z-10 border border-gray-300 p-4 ">
        <div className="max-w-[1200px] mx-auto flex gap-10">
          <Link href={"/"}>
            <img src="/assets/img/logo/logo.png" className="h-[46px]" />
          </Link>
          <div className="flex-1 justify-center hidden lg:flex">
            <Menu
              className="bg-transparent w-full font-bold"
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={MENU}
              // theme="dark"
            />
          </div>
          <div className="flex lg:hidden flex-1 justify-end">
            <MenuOutlined
              onClick={() => setOpenMenu(true)}
              style={{
                color: "black",
              }}
            />
            <Drawer
              title={
                <img src="/assets/img/logo/logo.png" className="h-[46px]" />
              }
              placement={"left"}
              closable={false}
              onClose={() => setOpenMenu(false)}
              open={openMenu}
            >
              <Menu
                mode="inline"
                className="bg-transparent w-full font-bold"
                onClick={onClick}
                selectedKeys={[current]}
                // mode="horizontal"
                items={MENU}
              />
            </Drawer>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default MenuAntd;
