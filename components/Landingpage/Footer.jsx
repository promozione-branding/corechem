"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  PhoneCall,
  Mail,
  MapPin,
  ArrowUpRight,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Articles & Resources", href: "/our-blogs" },
  { name: "Return & Refund ", href: "/return-refund" },
  { name: "Shipping", href: "/shipping" },
  { name: "Contact Us", href: "/contact" },
  { name: "Sitemap", href: "/sitemap" },
];

const products = [
  {
    name: "Titanium Dioxide",
    href: "/categories/titanium-dioxide",
  },
  {
    name: "Titanium Dioxide Rutile",
    href: "/categories/titanium-dioxide-rutile",
  },
  {
    name: "Carbon Black",
    href: "/categories/carbon-black",
  },

  {
    name: "Color Pigment Supplier",
    href: "color-pigment-supplier",
  },
  {
    name: "Lithopone",
    href: "/categories/lithopone",
  },
  {
    name: "Optical Brightener",
    href: "/categories/optical-brightening",
  },
];

import { categories } from "@/Data";
import { FaWarehouse } from "react-icons/fa";

export default function Footer() {
  const [oopen, setoopen] = useState(false);
  return (
    <footer className="relative overflow-hidden bg-[#1C293C] text-white">
      <div className="mx-3 md:px-0">
        {/* TOP GRADIENT LINE */}
        <div className="h-[4px] w-full bg-gradient-to-r from-[#BE8220] via-[#ff7a3c] to-[#BE8220]" />

        {/* BACKGROUND */}
        <div
          className="absolute inset-0  bg-center bg-cover  pointer-events-none"
          style={{
            backgroundImage: "url(/imgi_120_footer_bg.webp)",
          }}
        />

        {/* GLOW */}

        {/* MAIN */}
        <div className="relative z-10 mx-auto max-w-[1380px]  py-[35px]">
          {/* TOP GRID */}
          <div className="grid gap-[50px] border-b border-white/10 pb-[55px] lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            {/* ABOUT */}
            <div>
              {/* LOGO */}
              <Link href="/" className="inline-block">
                <Image
                  src="/logo4.png"
                  alt="Corechem Corporation"
                  width={300}
                  height={20}
                  className=" object-cover h-25 w-80 bg-white rounded-md p-1"
                />
              </Link>

              {/* DESC */}
              <p className="mt-[28px] max-w-[420px] text-[15px] leading-[31px] text-white">
                Corechem Corporation is a trusted Titanium Dioxide Supplier
                delivering premium-quality TiO₂ solutions for paints, coatings,
                plastics, inks, rubber, paper, cosmetics, and industrial
                manufacturing applications worldwide.
              </p>

              {/* SOCIAL */}
              {/* CONTACT */}
              <div>
                {/* <h3 className="text-[20px] mt-4 font-[700] tracking-[-0.5px]">
              Contact Information
            </h3> */}

                <div className="mt-[28px] space-y-[16px]">
                  {/* ADDRESS */}
                  {/* Head Office */}
<div className="flex items-start gap-[14px]">
  <div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-full bg-white/80 text-[#4B3089]">
    <MapPin size={18} />
  </div>

  <p className="text-[15px] leading-[28px] text-white">
    <span className="font-bold">Head Office:</span>{" "}
    Office No. 101-E, Crown Heights, Swarn Jayanti Park,
    Sector 10, Rohini, Delhi - 110085
  </p>
</div>
<div className="flex items-start gap-[14px]">
  <div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-full bg-white/80 text-[#4B3089]">
    <MapPin size={18} />
  </div>

  <p className="text-[15px] leading-[28px] text-white">
    <span className="font-bold">Office Address:</span>{" "}
   K p ethitom Near, lake, Makarba, Ahmedabad, Gujarat 380051
  </p>
</div>

{/* Warehouse Location */}
<div className="mt-5 flex items-start gap-[14px]">
  <div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-full bg-white/80 text-[#4B3089]">
    <FaWarehouse size={18} />
  </div>

  <p className="text-[15px] leading-[28px] text-white">
    <span className="font-bold">Warehouse Address:</span>{" "}
    M-213, Bawana Industrial Area, Sector 3,
    Near Shyam Dharam Kanta, Delhi - 110039
  </p>
</div>

                  {/* PHONE */}
                  <div className="flex items-center gap-[14px]">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#fff]/80 text-[#4B3089]">
                      <PhoneCall size={17} />
                    </div>

                    <a
                      href="tel:+919818544039"
                      className="text-[15px]  text-white transition-all duration-300 hover:text-[#2B4D9D]"
                    >
                      +91 98185 44039
                    </a>
                    <a
                      href="tel:+919250056235"
                      className="text-[15px]  text-white transition-all duration-300 hover:text-[#2B4D9D]"
                    >
                      +91 92500 56235
                    </a>

                    {/* EMAIL */}
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-[14px]">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#fff]/80 text-[#4B3089]">
                    <Mail size={17} />
                  </div>
                  <div>
                    {" "}
                    <a
                      href="mailto:info@corechemcorp.com"
                      className="text-[17px] text-white transition-all duration-300 hover:text-[#2B4D9D]"
                    >
                      info@corechemcorp.com
                    </a>
                    <br />
                    <a
                      href="mailto:sales@corechemcorp.com"
                      className="text-[17px] text-white transition-all duration-300 hover:text-[#2B4D9D]"
                    >
                      sales@corechemcorp.com
                    </a>
                  </div>
                </div>

                {/* CTA */}
               
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-[20px] font-[700] tracking-[-0.5px]">
                Quick Links
              </h3>

              <div className="mt-[28px] space-y-[16px]">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-[10px] text-[15px] text-white transition-all duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#2B4D9D] to-[#4B3089]"
                  >
                    <ChevronRight
                      size={16}
                      className="transition-all text-white duration-300 group-hover:translate-x-[3px]"
                    />

                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* PRODUCTS */}
            <div>
              <h3 className="text-[20px] font-[700] tracking-[-0.5px]">
                Our Products
              </h3>

              <div className="mt-[28px] space-y-[16px]">
                {categories.map((product, index) => (
                  <Link
                    href={`/categories/${product.id}`}
                    key={index}
                    className="group flex items-start gap-[10px] text-[15px] text-white transition-all duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#2B4D9D] to-[#4B3089]"
                  >
                    <FlaskConical
                      size={15}
                      className="mt-[4px] transition-all duration-300 text-white group-hover:rotate-12"
                    />

                    <span>{product.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mx-auto lg:max-w-3xl rounded-[28px] px-2  text-white  shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
              {/* TOP BADGE */}
              <div className="text-center">
                <span className="inline-block rounded-full text-[20px] px-4 py-2 font-bold uppercase  text-white">
                  Trust Elite Certificate
                </span>
              </div>

              {/* IMAGE */}
              <div
                onClick={() => setoopen(true)}
                className="relative mx-auto mt-4 h-[120px] w-full max-w-[320px] overflow-hidden rounded-xl"
              >
                <Image
                  src="/trustseal.webp"
                  alt="Trust Elite Certificate"
                  fill
                  className="object-contain"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-3 max-w-2xl  text-sm   text-whote md:text-sm">
                We are proud to present the
                <span className="font-semibold ">
                  {" "}
                  Trust Elite Certificate of Excellence{" "}
                </span>
                to
                <span className="font-semibold "> Corechem Corporation</span>,
                recognizing their commitment to exceptional customer service,
                outstanding business practices, and dedication to building trust
                with their customers.
              </p>

               <a
                  href="https://wa.me/919818544039"
                  className="group mt-[24px] w-fit   flex h-[58px] items-center gap-[12px] rounded-full bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] px-[26px] text-[14px] font-[700] uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-white hover:text-[#111827]"
                >
                  Get Bulk Pricing
                  <ArrowUpRight
                    size={18}
                    className="transition-all duration-300 group-hover:rotate-45"
                  />
                </a>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col gap-[16px] pt-[28px] text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p className="text-[14px] text-white">
              © 2026 Corechem Corporation. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-[18px] text-[14px] text-white lg:justify-end">
              <span className="h-[4px] w-[4px] rounded-full bg-white/20" />

              <span className="h-[4px] w-[4px] rounded-full bg-white/20" />

              <p>
                Website Designed By Inquiry Bazaar Pvt. Ltd.{" "}
                <a
                  target="_blank"
                  href="https://inquirybazaar.com/"
                  className="text-[#2B4D9D] hover:underline"
                >
                  B2B Marketplace
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {oopen && (
        <div
          onClick={() => setoopen(false)}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 p-4"
        >
          <div className="relative max-w-5xl lg:w-[60%] lg:h-[90%]  overflow-hidden bg-white">
            <button
              onClick={() => setoopen(false)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full  text-white flex items-center justify-center"
            >
              ✕
            </button>

            <Image
              src="/trust Elite certificate.webp"
              alt="Certificate"
              width={1400}
              height={900}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </footer>
  );
}
