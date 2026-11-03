"use client";

import {
  ShieldCheck,
  FlaskConical,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Consistent quality that meets global standards.",
  },
  {
    id: 2,
    icon: FlaskConical,
    title: "Wide Applications",
    desc: "Ideal for paints, plastics,\ninks, coatings & more.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Timely Delivery",
    desc: "Reliable logistics and\non-time dispatch.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Trusted Partner",
    desc: "Serving industries\nacross India & abroad.",
  },
  {
    id: 5,
    icon: Headphones,
    title: "Expert Support",
    desc: "Technical assistance\nwhenever you need.",
  },
];

export default function FeatureStripInquiry() {
  return (
    <section className="w-full overflow-hidden  rounded-md bg-[#02224b]">
      {/* MOBILE SLIDER */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center gap-4 px-6 py-6 md:py-8 text-center min-h-[160px]">
                  <Icon
                    strokeWidth={1.8}
                    className="h-[40px] w-[40px] md:h-[48px] md:w-[48px] text-[#d79a19]"
                  />

                  <div>
                    <h3 className="text-[20px] font-[700] leading-[24px] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 whitespace-pre-line text-[12px] leading-3 md:leading-[24px] font-[400] text-white/90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col xl:flex-row items-center justify-center gap-5 px-4 py-7 min-h-[118px]
                ${
                  index !== features.length - 1
                    ? "border-r border-white/10"
                    : ""
                }`}
              >
                <div className="shrink-0">
                  <Icon
                    strokeWidth={1.8}
                    className="h-[48px] w-[48px] text-[#d79a19]"
                  />
                </div>

                <div className="text-center xl:text-left">
                  <h3 className="text-[20px] font-[700] leading-[24px] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 whitespace-pre-line text-[14px] leading-[24px] font-[400] text-white/75">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}