"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Icon } from "@iconify/react/dist/iconify.js";
import SignUp from "../../Auth/SignUp";

const Banner = () => {
  const [sticky, setSticky] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signUpRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 80);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]);

  useEffect(() => {
    if (isSignUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignUpOpen]);
  return (
    <section className="bg-header pt-28 lg:pb-14 overflow-hidden ">
      <div className="container">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 content-center">
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <Image
              src="/images/hero/star.svg"
              alt=""
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px] opacity-10"
              loading="lazy"
              aria-hidden="true"
            />
            <Image
              src="/images/hero/lineone.svg"
              alt=""
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px] opacity-5"
              loading="lazy"
              aria-hidden="true"
            />
            <Image
              src="/images/hero/linetwo.svg"
              alt=""
              width={190}
              height={148}
              className="hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-2xl leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5">
                MIỄN PHÍ THƯ VIỆN SỐ HƠN +5.000 ĐỀ THI CÂU HỎI
              </h1>
              <p className="text-black/75 text-lg font-normal text-center lg:text-start max-w-2xl mx-auto lg:mx-0">
                Dành riêng cho giáo viên dạy cá nhân, dạy thêm hoặc tại trung
                tâm
              </p>
              <div className="text-center lg:text-start max-w-2xl mx-auto lg:mx-0 mt-2">
                <div className="flex items-stretch gap-2 lg:gap-4 justify-center lg:justify-start overflow-hidden">
                  <div className="flex flex-col flex-shrink-0 justify-center">
                    <span className="text-black text-sm lg:text-xl  font-bold whitespace-nowrap">
                      Tiết kiệm
                    </span>
                    <span className="text-black text-sm lg:text-xl  font-bold whitespace-nowrap">
                      thời gian
                    </span>
                  </div>
                  <span className="text-primary text-2xl lg:text-3xl font-bold flex-shrink-0 flex items-center">
                    80%
                  </span>
                  <div className="mx-1 lg:mx-2 w-px bg-black/40 flex-shrink-0"></div>
                  <div className="flex flex-col flex-shrink-0 min-w-0 justify-center">
                    <span className="text-primary text-sm lg:text-2xl  font-bold whitespace-nowrap">
                      56 tài khoản free
                    </span>
                    <span className="text-black text-xs lg:text-lg font-medium whitespace-nowrap">
                      cho Thầy/Cô trải nghiệm
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 max-w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3 justify-center lg:justify-start">
                  {/* Card 1: Truy cập tài liệu độc quyền */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 lg:p-3 flex items-center gap-2 flex-1 min-w-0 transition-all duration-200 hover:shadow-md hover:border-gray-400">
                    <div className="flex-shrink-0 relative">
                      <Icon
                        icon="mdi:file-document-multiple"
                        className="text-green-400 text-2xl lg:text-3xl"
                      />
                      <Icon
                        icon="mdi:lock"
                        className="text-green-500 text-xs lg:text-sm absolute -top-1 -right-1 bg-white rounded-full p-0.5"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-gray-800 font-medium text-xs lg:text-sm leading-tight break-words">
                        Truy cập tài liệu độc quyền
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Nhóm hỗ trợ học tập 24/7 */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 lg:p-3 flex items-center gap-2 flex-1 min-w-0 transition-all duration-200 hover:shadow-md hover:border-gray-400">
                    <div className="flex-shrink-0">
                      <Icon
                        icon="mdi:headset"
                        className="text-green-400 text-2xl lg:text-3xl"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-gray-800 font-medium text-xs lg:text-sm leading-tight break-words">
                        Nhóm hỗ trợ học tập 24/7
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Chứng nhận hoàn thành khóa học */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 lg:p-3 flex items-center gap-2 flex-1 min-w-0 transition-all duration-200 hover:shadow-md hover:border-gray-400">
                    <div className="flex-shrink-0">
                      <Icon
                        icon="mdi:certificate"
                        className="text-green-400 text-2xl lg:text-3xl"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-gray-800 font-medium text-xs lg:text-sm leading-tight break-words">
                        Chứng nhận hoàn thành khóa học
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <div
                  onClick={() => {
                    setIsSignUpOpen(true);
                  }}
                >
                  <button
                    className="text-white font-medium text-base lg:text-lg p-2 rounded-lg transition-all duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
                    aria-label="Nhận tài liệu miễn phí"
                  >
                    Nhận tài liệu miễn phí
                  </button>
                  {isSignUpOpen && (
                    <div
                      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="signup-modal-title"
                    >
                      <div
                        ref={signUpRef}
                        className="relative mx-auto w-full bg-white max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-4 sm:px-8 pt-12 sm:pt-14 pb-6 sm:pb-8 text-center animate-in zoom-in-95 duration-200"
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
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="flex justify-center md:justify-center lg:justify-center">
              <div className="w-full md:max-w-md lg:max-w-none">
                <Image
                  src="/images/hero/banner.webp"
                  alt="Thư viện số Blue Edu với hơn 5000 đề thi câu hỏi"
                  width={698}
                  height={652}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 41.67vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
