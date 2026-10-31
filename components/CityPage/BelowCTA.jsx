import { handleCallClick, handleWhatsappClick } from "@/lib/track";
import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function BelowCTA({ city }) {
  return (
    <section className="relative overflow-hidden py-2 md:py-9 bg-[#062347]">
      {" "}
      {/* Background Effects */}{" "}
      <div className="absolute inset-0">
        {" "}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C8921C]/10 rounded-full blur-3xl"></div>{" "}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C8921C]/10 rounded-full blur-3xl"></div>{" "}
      </div>{" "}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {" "}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 md:p-8 text-center">
          {" "}

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            {" "}
            Ready to Source Premium{" "}
            <span className="text-[#C8921C]"> Titanium Dioxide </span> By
            Trusted Supplier in {city}?{" "}
          </h2>{" "}
          <p className="mt-6 md:text-lg text-gray-300  max-w-3xl mx-auto leading-relaxed">
            {" "}
            Call Us Now or Request a Free Quote Today and discover why
            businesses trust{" "}
            <strong className="text-white">Corechem Corporation</strong> as
            their preferred Titanium Dioxide Supplier in {city}. Our team is
            ready to assist you with product selection, technical guidance,
            pricing, and bulk supply requirements.{" "}
          </p>{" "}
          {/* Phone Number */}{" "}
          <div className="mt-8">
            {" "}
            <a
              href="tel:+918810422935"
              className="text-3xl md:text-5xl font-bold text-[#C8921C] hover:text-white transition"
            >
              {" "}
              +91 98185 44039{" "}
            </a>{" "}
          </div>{" "}
          {/* CTA Buttons */}{" "}
          <div className="mt-5  md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {" "}
            <a onClick={() => handleCallClick({ source: "Website city page", obj: "N/A" })}
              href="tel:+919818544039"
              className="inline-flex items-center gap-3 bg-[#C8921C] hover:bg-[#b17f16] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105"
            >
              {" "}
              <FaPhoneAlt /> Call Us Now{" "}
            </a>{" "}
            <a onClick={() => handleWhatsappClick({ source: "Website city page", obj: "N/A" })}
              href="https://wa.me/919818544039"
              className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#062347] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              {" "}
              Request Free Quote <FaArrowRight />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
