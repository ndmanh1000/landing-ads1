"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { featureData } from "@/app/types/featuredata";
import FeatureSkeleton from "@/app/Skeleton/Features";

const Features = () => {
  const [features, setFeatures] = useState<featureData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatures(data.FeatureData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="features">
      <div className="container">
        <h1 className="text-midnight_text text-center text-3xl md:text-2xl mb-5 max-w-2xl mx-auto sm:leading-16">
          Thư viện Blue Edu phù hợp với ai?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* LEFT: 4 feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <FeatureSkeleton key={i} />
                ))
              : features.slice(0, 4).map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:scale-100 transition-all duration-300 p-5 shadow-lg flex flex-col items-center justify-center"
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.heading}
                      width={55}
                      height={55}
                      className="mb-2 "
                    />
                    <h3 className="text-base lg:text-lg text-center text-gray-700 mt-4">
                      {item.heading}
                    </h3>
                    <p className="text-base text-black/50 mt-2 leading-6">
                      {item.paragraph}
                    </p>
                  </div>
                ))}
          </div>

          {/* RIGHT: Image box */}
          <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-lg lg:row-span-2">
            <Image
              src="/images/feature-big.jpg" // đổi thành ảnh của bạn
              alt="Feature Image"
              fill
              className="object-cover"
              priority
            />
            fewf
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
