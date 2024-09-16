"use client";

import { createRequest } from "@/services/request";
import React, { useState } from "react";

function RequestContact() {
  const defaultValue = {
    name: "",
    phone: "",
    content: "",
  };
  const [formData, setFormData] = useState(defaultValue);

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
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      <h2 className="mb-4 text-2xl font-bold dark:text-white">
        Đăng Ký Nhận Thông Tin Tư Vấn
      </h2>
      <form id="contactForm">
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="name"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="text"
                id="name"
                placeholder="Nhập tên"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-00 sm:mb-0"
                name="name"
                onChange={(e) => onHandleChange("name", e.target.value)}
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="email"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                // type="phone"
                id="phone"
                placeholder="Nhập số điện thoại"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-00 sm:mb-0"
                name="phone"
                onChange={(e) => onHandleChange("phone", e.target.value)}
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="textarea"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <textarea
              id="textarea"
              name="textarea"
              placeholder="Vui lòng nhập nội dung"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-00 sm:mb-0"
              onChange={(e) => onHandleChange("content", e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleCreateRequest()}
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestContact;
