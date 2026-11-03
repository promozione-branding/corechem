"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./RevealLite";
import Link from "next/link";
import { handleWhatsappClick } from "@/lib/track";

// The shine sweep used to be a framer-motion infinite animation, which keeps
// the main thread busy for as long as the page is open. A CSS keyframe runs on
// the compositor instead (same motion: -100% -> 200%, 2s, linear, infinite).
const shineCss = `
@keyframes ctal-shine {
  from { transform: translateX(-100%); }
  to   { transform: translateX(200%); }
}
.ctal-shine { animation: ctal-shine 2s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .ctal-shine { animation: none; }
}
`;

export default function CTAL() {
  return (
    <section className="relative w-full  mx-auto overflow-hidden rounded-md">
      <style>{shineCss}</style>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] items-stretch">
          {/* LEFT IMAGE */}
          <div className="relative h-[220px] sm:h-[260px] md:h-auto w-full">
            <Image
              src="/cta.webp"
              alt="Garbage Bags Manufacturing"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative bg-[#1C293C] flex items-center">
            {/* Dot Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-10  flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              {/* TEXT */}
              <div className="max-w-2xl">
                <h2 className="text-white text-[28px] md:text-[40px]   font-bold leading-tight mb-4">
                  Looking for a Reliable Titanium Dioxide Supplier?
                </h2>

                <p className="text-white hidden md:block text-sm sm:text-base  leading-relaxed">
                  Corechem Corporation provides premium-quality Titanium Dioxide
                  solutions for multiple industrial applications with reliable
                  supply, competitive pricing, and consistent product quality.
                  Partner with us for dependable TiO₂ products and expert
                  support tailored to your business needs.
                </p>
              </div>

              {/* BUTTON */}
              <Link  href="https://wa.me/919818544039" onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: "N/A" })}>
                <button
                  className="relative flex items-center justify-center md:justify-start gap-2 lg:gap-1 xl:gap-2 bg-white text-black px-6 py-3 sm:py-4 rounded-xl font-medium overflow-hidden w-full md:w-auto transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 whitespace-nowrap">Explore Our Range</span>
                  <ArrowRight size={18} />

                  {/* Shine Effect */}
                  <div
                    aria-hidden="true"
                    className="ctal-shine absolute top-0 left-0 w-1/2 h-full bg-yellow-600/40"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}