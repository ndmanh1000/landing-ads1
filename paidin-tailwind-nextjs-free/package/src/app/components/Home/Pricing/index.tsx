"use client";

import Image from "next/image";

import { Icon } from "@iconify/react/dist/iconify.js";


const Pricing = () => {

  const benefits = [
    {
      icon: "/images/pricing/setting1.svg",
      text: "Hỗ trợ sau khóa học, tư vấn 1-1 từ chuyên gia",
    },
    {
      icon: "/images/pricing/setting1.svg",
      text: "Toàn bộ nội dung khóa học với 10 buổi học chất lượng cao",
    },
    {
      icon: "/images/pricing/setting1.svg",
      text: "Bài tập thực hành, dự án thực tế giúp bạn áp dụng ngay",
    },
    {
      icon: "/images/pricing/setting1.svg",
      text: "Phát triển nhanh hoàn thành khóa học, nâng tầm hồ sơ nghề nghiệp",
    },
    {
      icon: "/images/pricing/setting1.svg",
      text: "Phát triển nhanh hoàn thành khóa học, nâng tầm hồ sơ nghề nghiệp",
    },
  ];

  return (
    <section id="pricing" className="bg-header relative py-20">
      <div className="container px-4">
        <h1 className="text-center text-3xl md:text-2xl">
          Hướng dẫn Đăng ký để nhận & lưu trữ thư viện miễn phí.
        </h1>

        {/* Yearly/Monthly Toggle Buttons */}
        <div className="mt-6 relative">
          <div className="bg-white rounded-2xl p-6 shadow-md mx-auto">
            <p className="text-center text-2xl font-medium">
              Học phí đã bao gồm
            </p>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-5
            "
            >
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt="benefit icon"
                    width={24}
                    height={24}
                    className="mt-1 border border-gray-100 h-10 w-10 flex items-center justify-center rounded-2xl bg-gray-100"
                  />
                  <p className="text-base lg:text-lg text-gray-700 leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
              <div className="mt-6 flex justify-center md:justify-start">
                <button
                  className="bg-lime-400 hover:bg-lime-500 text-black font-medium text-base lg:text-lg p-2 rounded-xl transition"

                >
                  Nhận tài liệu miễn phí
                </button>

              </div>
            </div>

            {/* BUTTON */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
