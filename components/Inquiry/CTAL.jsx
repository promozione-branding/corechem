"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "../Landingpage/Reveal";
import Link from "next/link";
import { handleWhatsappClick } from "@/lib/track";

export default function CTAL() {
  return (
    <section className="relative w-full  mx-auto overflow-hidden rounded-md">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] items-stretch">
          {/* LEFT IMAGE */}
          <div className="relative h-[220px] sm:h-[260px] md:h-auto w-full">
            <Image
              src="/cta.webp"
              alt="Garbage Bags Manufacturing"
              fill
              priority
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center md:justify-start gap-2 lg:gap-1 xl:gap-2 bg-white text-black px-6 py-3 sm:py-4 rounded-xl font-medium overflow-hidden w-full md:w-auto"
                >
                  <span className="relative z-10 whitespace-nowrap">Explore Our Range</span>
                  <ArrowRight size={18} />

                  {/* Shine Effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-yellow-600/40 skew-x-12"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
