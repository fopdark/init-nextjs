"use client";

import type { MenuProps } from "antd";
import { ConfigProvider, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { MENU } from "@/constants/Menu";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Sơn Epoxy, Sơn Sàn",
    key: "1",
  },
  {
    label: "Sơn Sàn PU",
    key: "2",
  },
  {
    label: "Chống Thấm",
    key: "3",
  },
  {
    label: "Phủ FRP, Phủ Compositer",
    key: "4",
  },
  {
    label: "Đánh Bóng Bê Tông",
    key: "5",
  },
  {
    label: "Sơn Thể Thao",
    key: "6",
  },
];

const MenuAntd: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
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
          <img src="/assets/img/logo/logo.png" className="h-[46px]" />
          <div className="flex-1  justify-center hidden lg:flex">
            <Menu
              className="bg-transparent w-full font-bold"
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={MENU}
              // theme="dark"
            />
          </div>
          <div className="lg:hide flex-1 flex justify-end">
            <MenuOutlined onClick={() => setOpenMenu(true)} />
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
