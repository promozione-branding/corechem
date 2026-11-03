"use client"
import Image from "next/image";
import Link from "next/link";
import {
  FaIndustry,
  FaCheckCircle,
  FaWhatsapp,
  FaBoxOpen,
  FaHeadset,
} from "react-icons/fa";
import ContactForm from "../Popup";
import { useState } from "react";

export default function Whychoose2() {
      const [isOpen, setIsOpen] = useState(false);
    
  const points = [
    "Direct Manufacturer & Supplier",
    "Consistent Product Quality",
    "Competitive Pricing",
    "Timely Delivery",
    "Custom Packaging Available",
    "Dedicated Customer Support",
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="grid md:grid-cols-3">
            
            {/* IMAGE */}
            <div className="relative min-h-[250px] md:min-h-[320px]">
              <Image
                src="/cta.webp" // replace with your image
                alt="Chemical Laboratory"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">
              <h2 className="mb-6 text-xl md:text-2xl font-bold text-[#062347]">
                WHY CHOOSE CORE CHEM?
              </h2>

              <div className="space-y-4">
                {points.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 text-[#16a34a]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-[#062347] p-6 md:p-8 text-center text-white flex flex-col justify-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <FaIndustry className="text-3xl text-[#c8921c]" />
              </div>

              <h3 className="text-2xl font-bold">
                Looking for Bulk Chemicals?
              </h3>

              <p className="mt-3 text-white/80">
                Get the best prices directly from the manufacturer.
              </p>

              <Link
                 href="https://wa.me/919818544039"
                target="_blank"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                Get Best Price on WhatsApp
              </Link>
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div onClick={() => setIsOpen(true)} className="bg-[#16a34a] px-4 py-4">
            <div className="flex  whitespace-nowrap items-center justify-center gap-2 text-center md:flex-row">
              <FaBoxOpen className="text-white text-xl" />

              <h3 className="font-bold text-white md:text-lg">
                GET BULK Titanium QUOTE
              </h3>

              <FaHeadset className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}
      
    </section>
  );
}