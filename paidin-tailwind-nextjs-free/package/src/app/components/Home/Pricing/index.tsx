"use client";

import Image from "next/image";
import SignUp from "../../Auth/SignUp";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";

const Pricing = () => {
  const [sticky, setSticky] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signUpRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSignUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignUpOpen]);
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
              <div className="mt-6">
                <button
                  className="bg-lime-400 hover:bg-lime-500 text-black font-medium text-base lg:text-lg p-2 rounded-xl transition"
                  onClick={() => {
                    setIsSignUpOpen(true);
                  }}
                >
                  Nhận tài liệu miễn phí
                </button>
                {isSignUpOpen && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 p-4">
                    <div
                      ref={signUpRef}
                      className="relative mx-auto w-full bg-white max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-4 sm:px-8 pt-12 sm:pt-14 pb-6 sm:pb-8 text-center"
                    >
                      <button
                        onClick={() => setIsSignUpOpen(false)}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 hover:cursor-pointer z-10"
                        aria-label="Close Sign Up Modal"
                      >
                        <Icon
                          icon="mdi:close"
                          className="text-gray-600 hover:text-gray-900 text-2xl sm:text-3xl transition-colors"
                        />
                      </button>
                      <SignUp />
                    </div>
                  </div>
                )}
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
