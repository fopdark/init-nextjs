import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

export const MENU: MenuItem[] = [
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