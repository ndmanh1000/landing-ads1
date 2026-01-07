"use client";
import SignUp from "../../Auth/SignUp";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";

const People = () => {
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
  const features = [
    "Hơn 5.000 tài liệu đã được số hóa",
    "Phân loại rõ ràng theo năng lực",
    "Phù hợp nhiều trình độ học sinh",
    "Có thể sử dụng cho: Soạn bài - Ra đề kiểm tra - Bài tập về nhà - Ôn luyện và đánh giá",
  ];

  return (
    <section className="pt-32 pb-20" id="product">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex justify-center">
            <div className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full h-full flex flex-col gap-10 relative py-11 px-16 rounded-2xl after:absolute after:bg-[url('/images/people/quote.png')] after:w-48 after:h-40 after:-top-16 after:right-0">
              <div>
                <div>IMG</div>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex flex-col gap-7 lg:pl-24 mt-10 lg:mt-0 ">
            <h1 className="text-midnight_text  text-center lg:text-start! lg:leading-14 text-3xl md:text-2xl leading-16">
              THƯ VIỆN 5000 CÂU HỎI GỒM NHỮNG GÌ?
            </h1>
            <ul className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon
                    icon="mdi:check-circle"
                    className="text-green-600 text-xl lg:text-2xl flex-shrink-0 mt-0.5"
                  />
                  <span className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <div
                onClick={() => {
                  setIsSignUpOpen(true);
                }}
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-medium text-base lg:text-lg p-2 rounded-lg transition duration-300 ">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
