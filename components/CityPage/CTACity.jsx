import { handleCallClick, handleWhatsappClick } from "@/lib/track";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CTACity({ city }) {
  return (
    <>
      <section className="w-full bg-[#062347] text-white py-8 md:py-10">
        {" "}
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          {" "}
          <div className="text-center md:text-left">
            {" "}
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold text-[#C8921C]"
            >
              {" "}
              Titanium Dioxide Supplier in {city}{" "}
            </Link>{" "}
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              {" "}
              Ready to Source Premium Titanium Dioxide?{" "}
            </h2>{" "}
            <p className="mt-3 text-gray-200 text-base md:text-lg max-w-2xl">
              {" "}
              Partner with Corechem Corporation for high-quality Titanium
              Dioxide, competitive pricing, reliable supply, and expert support
              for your industrial requirements.{" "}
            </p>{" "}
            <p className="text-2xl md:text-4xl font-bold text-[#C8921C] mt-4">
              {" "}
              +91 98185 44039{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex flex-col whitespace-normal gap-4">
            {" "}
            <a onClick={() => handleCallClick({ source: "Website city page", obj: "N/A" })}
              href="tel:+919818544039"
              className="bg-[#C8921C] hover:bg-[#b17f16] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
            >
              {" "}
              Call Now{" "}
            </a>{" "}
            <a onClick={() => handleWhatsappClick({ source: "Website city page", obj: "N/A" })}
              href="https://wa.me/919818544039"
              target="_blank"
              className="bg-white text-[#062347] flex gap-2  justify-between items-center whitespace-nowrap hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
            >

              WhatsApp Us <FaWhatsapp size={30} />
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
