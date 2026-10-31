import { handleWhatsappClick } from "@/lib/track";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function BCTA() {
  return (
    <section className="py-4 px-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-gradient-to-r from-[#16a34a] to-[#22c55e] shadow-xl">
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 text-center md:flex-row md:px-10 md:py-5 md:text-left">

          {/* Left Content */}
          <div className="md:py-4">
            <h3 className="text-lg font-bold text-white md:text-5xl">
              Need Titanium Dioxide in Bulk?
            </h3>

            <p className="text-sm text-green-50 mt-2 md:mt-4 md:text-lg">
              Get Instant Quote, Technical Support & Best Bulk Pricing
            </p>
          </div>

          {/* CTA Button */}
          <Link onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: "N/A" })}
            href="https://wa.me/919818544039"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#16a34a] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp Now
          </Link>
        </div>
      </div>
    </section>
  );
}