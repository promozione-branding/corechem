"use client";

import {
  ShieldCheck,
  FlaskConical,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  { id: 1, icon: ShieldCheck, title: "Premium Quality", desc: "Consistent quality that meets global standards." },
  { id: 2, icon: FlaskConical, title: "Wide Applications", desc: "Ideal for paints, plastics,\ninks, coatings & more." },
  { id: 3, icon: Truck, title: "Timely Delivery", desc: "Reliable logistics and\non-time dispatch." },
  { id: 4, icon: BadgeCheck, title: "Trusted Partner", desc: "Serving industries\nacross India & abroad." },
  { id: 5, icon: Headphones, title: "Expert Support", desc: "Technical assistance\nwhenever you need." },
];

export default function FeatureStripInquiry() {
  return (
    <section className="w-full overflow-hidden rounded-md bg-[#02224b]">
      {/* MOBILE: pure-CSS scroller (no JS => no layout shift on hydration) */}
      <div className="block lg:hidden overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex min-h-[160px] w-[50vw] shrink-0 snap-start flex-col items-center justify-center gap-4 px-6 py-6 text-center"
              >
                <Icon strokeWidth={1.8} className="h-[40px] w-[40px] text-[#d79a19]" />
                <div>
                  <h3 className="text-[20px] font-[700] leading-[24px] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-[12px] leading-4 font-[400] text-white/90">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col xl:flex-row items-center justify-center gap-5 px-4 py-7 min-h-[118px] ${
                  index !== features.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <div className="shrink-0">
                  <Icon strokeWidth={1.8} className="h-[48px] w-[48px] text-[#d79a19]" />
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