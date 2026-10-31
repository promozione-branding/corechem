"use client";

import {
  FaPaintRoller,
  FaRecycle,
  FaTint,
  FaTshirt,
  FaCapsules,
  FaHardHat,
  FaDotCircle,
  FaIndustry,
  FaWhatsapp,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { handleWhatsappClick } from "@/lib/track";

const industries = [
  {
    title: "Paint Industry",
    icon: FaPaintRoller,
  },
  {
    title: "Plastic Industry",
    icon: FaRecycle,
  },

  {
    title: "Textile Industry",
    icon: FaTshirt,
  },

  {
    title: "Construction",
    icon: FaHardHat,
  },
  {
    title: "Rubber Industry",
    icon: FaDotCircle,
  },
  {
    title: "Manufacturing",
    icon: FaIndustry,
  },
];

export default function Industry() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-6 md:py-15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-7 md:mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-[#c8921c]/10 px-5 py-2 text-sm font-semibold text-[#c8921c]">
            Our Expertise
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#062347] md:text-6xl">
            Industries We Serve
          </h2>

          <div className="mx-auto mt-3 md:mt-5 h-1.5 w-28 rounded-full bg-[#c8921c]" />
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="industry-swiper pb-14"
        >
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="group mb-4  rounded-[30px] border border-gray-100 bg-white p-2 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#c8921c] hover:shadow-2xl">
                  {/* Icon */}
                  <div className="mb-4 md:mb-8 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#062347]/5 text-5xl text-[#062347] transition-all duration-500 group-hover:bg-[#c8921c] group-hover:text-white">
                      <Icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-md md:text-lg font-bold text-[#062347]">
                    {item.title}
                  </h3>

                  {/* Line */}
                  <div className="mx-auto mt-3 md:mt-5 h-1 w-12 rounded-full bg-[#c8921c] transition-all duration-500 group-hover:w-20" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* WhatsApp CTA */}
        <div className="mt-5 md:mt-12 flex justify-center">
          <a onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: "N/A" })}
             href="https://wa.me/919818544039"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center md:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 text-sm md:px-10 md:py-5 md:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,197,94,0.5)]"
          >
            {/* Glow Effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />



            <FaWhatsapp className="relative text-3xl md:text-4xl" />

            <span className="relative w-fit text-center">
              Discuss Your Requirement on WhatsApp
            </span>

            {/* Arrow */}
            <svg
              className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Swiper Custom Style */}
      <style jsx global>{`
        .industry-swiper .swiper-button-next,
        .industry-swiper .swiper-button-prev {
          width: 45px;
          height: 45px;
          background: #062347;
          border-radius: 999px;
          color: white;
          transition: all 0.3s ease;
        }

        .industry-swiper .swiper-button-next:hover,
        .industry-swiper .swiper-button-prev:hover {
          background: #c8921c;
        }

        .industry-swiper .swiper-button-next:after,
        .industry-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .industry-swiper .swiper-button-next,
          .industry-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}