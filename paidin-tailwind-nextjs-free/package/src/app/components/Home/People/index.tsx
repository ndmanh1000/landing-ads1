"use client";


import { Icon } from "@iconify/react/dist/iconify.js";

const People = () => {



  const features = [
    "Hơn 5.000 tài liệu đã được số hóa",
    "Phân loại rõ ràng theo năng lực",
    "Phù hợp nhiều trình độ học sinh",
    "Có thể sử dụng cho: Soạn bài - Ra đề kiểm tra - Bài tập về nhà - Ôn luyện và đánh giá",
  ];

  return (
    <section
      className="pt-32 pb-20 relative"
      id="product"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/logo/bg1.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-white/65"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-4 lg:space-x-1">
          <div className="md:col-span-1 lg:col-span-6 flex justify-center">
            <div className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full max-w-md md:max-w-lg lg:max-w-none h-full flex flex-col gap-10 relative py-8 md:py-10 lg:py-11 px-8 md:px-12 lg:px-16 rounded-2xl ">
              <div>
                <div>IMG</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-6 flex flex-col gap-7 md:pl-8 lg:pl-24 mt-10 md:mt-0 lg:mt-0 ">
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

            <div className="flex justify-center lg:justify-start">
              <div>


                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-medium text-base lg:text-lg p-2 rounded-lg transition duration-300 ">
                  Nhận tài liệu miễn phí
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
