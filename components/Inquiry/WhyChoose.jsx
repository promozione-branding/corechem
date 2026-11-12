"use client";

import {
  FaCheckCircle,
  FaBoxes,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaCheckCircle className="text-green-600" />,
      title: "Quality Assured",
      description:
        "Premium quality products that meet industrial standards.",
    },
    {
      icon: <FaBoxes className="text-orange-500" />,
      title: "Bulk Supply",
      description:
        "Bulk quantities available at the best competitive prices.",
    },
    {
      icon: <FaTruck className="text-green-600" />,
      title: "Fast Delivery",
      description:
        "Timely delivery across India with safe and secure packaging.",
    },
    {
      icon: <FaHeadset className="text-blue-900" />,
      title: "Technical Support",
      description:
        "Expert technical support to help you with the right solutions.",
    },
  ];

  return (
    <section id="about" className="bg-[#f8f8f8] py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-8 py-4 ${
                index !== features.length - 1
                  ? "md:border-r border-gray-300"
                  : ""
              }`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6 max-w-[220px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        {/* Mobile Slider */}
<div className="md:hidden">
  <Swiper
    spaceBetween={15}
    slidesPerView={1}
    modules={[Autoplay]}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
  >
    {features.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center text-center px-6 py-3 md:py-6">
          <div className="text-5xl mb-3 md:mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 leading-6">
            {item.description}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      </div>
    </section>
  );
}