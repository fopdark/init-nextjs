"use client";

import { createRequest } from "@/services/request";
import { Button } from "antd";
import React, { useState } from "react";

function Request(props: any) {
  const defaultValue = {
    name: "",
    phone: "",
    content: "",
  };
  const [formData, setFormData] = useState(defaultValue);
  const onSubmit = (value: any) => {
    console.log("value", value);
  };

  const onHandleChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateRequest = async () => {
    try {
      const res = await createRequest(formData);
      setFormData(defaultValue);
    } catch (error) {}
  };

  return (
    <div className="my-10 min-h-[600px] bg-[url('/assets/img/construction/bg-get-info.jpg')] flex flex-col justify-center rounded-2xl bg-cover">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-2 py-5 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-5">
          <div className="text-center pb-3">
            <h1 className="text-2xl">Đăng Ký Nhận Thông Tin Tư Vấn</h1>
            <p className="text-gray-300 text-sm">
              Gửi thông tin cho chúng tôi để được tư vấn báo giá
            </p>
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Nhập tên"
              name="name"
              onChange={(e) => onHandleChange("name", e.target.value)}
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Nhập số điện thoại"
              name="phone"
              onChange={(e) => onHandleChange("phone", e.target.value)}
            />

            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Vui lòng nhập nội dung"
              name="content"
              style={{ height: "121px" }}
              onChange={(e) => onHandleChange("content", e.target.value)}
            ></textarea>

            <div className="flex justify-center">
              <Button
                onClick={() => handleCreateRequest()}
                type="primary"
                className="w-[200px]"
              >
                Gửi
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Request;
