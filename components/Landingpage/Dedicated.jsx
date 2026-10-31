"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { handleCallClick, handleWhatsappClick } from "@/lib/track";
export default function TitaniumDioxideSection() {
  return (


    <Reveal>


      <section className="relative overflow-hidden bg-[#f7f8fa] py-[50px] px-3">
        {/* GRID PATTERN */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* CONTAINER */}
        <div className="relative z-10 mx-auto max-w-[1720px] px-4 sm:px-5">
          <div className="grid items-center gap-[45px] lg:gap-[60px] xl:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT CONTENT */}
            <div>
              {/* TOP LABEL */}
              <div className="flex items-center gap-[14px]">
                <span className="h-[2px] w-[50px] sm:w-[65px] bg-[#2B4D9D]" />

                <span className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-[700] text-[#2B4D9D]">
                  Titanium Dioxide Supplier
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-[15px] text-[#111827] text-[32px] leading-[42px] sm:text-[48px] sm:leading-[64px] lg:text-[58px] lg:leading-[82px] font-[700]">
                Leading Titanium
                <br />
                Dioxide Supplier
              </h2>

              {/* DESCRIPTION CARD */}
              <div className="relative mt-[16px] overflow-hidden rounded-[24px] border border-[#e9e9e9] bg-white p-[22px] sm:p-[35px] shadow-[0_25px_80px_rgba(0,0,0,0.05)]">
                {/* ACCENT */}
                <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-r from-[#2B4D9D] to-[#4B3089]" />

                <div className="space-y-[14px]">
                  <p className="text-black text-[16px] leading-[32px] sm:text-[18px] sm:leading-[42px] font-[400]">
                    <span className="font-[700] text-black">
                      Corechem Corporation
                    </span>{" "}
                    is a trusted Titanium Dioxide Supplier delivering
                    premium-quality TiO₂ solutions to manufacturers and industrial
                    businesses worldwide. We supply high-performance Titanium
                    Dioxide products designed for superior opacity, brightness, UV
                    resistance, and long-term durability across multiple
                    applications.
                  </p>

                  <p className="text-black text-[16px] leading-[32px] sm:text-[18px] sm:leading-[42px] font-[400]">
                    As an experienced Titanium Dioxide Supplier, we understand the
                    evolving demands of industries such as paints, coatings,
                    plastics, inks, paper, rubber, and cosmetics. Our focus on
                    product consistency, reliable logistics, and customer
                    satisfaction allows us to support businesses with dependable
                    supply solutions and competitive pricing.
                  </p>

                  <p className="text-black text-[16px] leading-[32px] sm:text-[18px] sm:leading-[42px] font-[400]">
                    Whether you require rutile or anatase grades, bulk supply, or
                    customized packaging solutions, Corechem Corporation provides
                    tailored chemical sourcing solutions to meet your operational
                    requirements.
                  </p>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-[32px] flex flex-col sm:flex-row gap-[16px]">
                {/* PRIMARY BUTTON */}
                <button className="group relative inline-flex h-[62px] sm:h-[68px] w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] px-[24px] sm:px-[34px] text-white shadow-[0_20px_50px_rgba(255,94,20,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(255,94,20,0.35)]">
                  <a onClick={() => handleWhatsappClick({ source: "Website home page", obj: "N/A" })} href="https://wa.me/919818544039?text=Hi%20I%20am%20interested%20in%20your%20products" className="relative z-10 flex items-center gap-[14px] text-[14px] sm:text-[16px] font-[700] uppercase tracking-[1px]">
                    Get Bulk Pricing
                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </span>
                  </a>

                  <div className="absolute inset-0 translate-y-full bg-[#2B4D9D] transition-all duration-500 group-hover:translate-y-0" />
                </button>

                {/* SECONDARY BUTTON */}
                <a onClick={() => handleCallClick({ source: "Website home page", obj: "N/A" })} href="tel:+919818544039" className="group inline-flex h-[62px] sm:h-[68px] w-full sm:w-auto items-center justify-center rounded-full border border-[#d7dce3] bg-white px-[24px] sm:px-[34px] text-[#111827] transition-all duration-500 hover:border-[#111827] hover:bg-[#111827] hover:text-white">
                  <span className="flex items-center gap-[14px] text-[14px] sm:text-[16px] font-[700] uppercase tracking-[1px]">
                    Talk to Our Experts
                    <span className="transition-all duration-300 group-hover:translate-x-[4px]">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT PREMIUM CARD */}
            <div
              style={{ backgroundImage: "url(/leading.webp)" }}
              className="relative min-h-[590px]  w-full overflow-hidden rounded-[30px] bg-cover bg-center"
            >
              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/90 via-[#111827]/75 to-[#BE8220]/50" />

              {/* LIGHT EFFECT */}
              <div className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-[#BE8220]/25 blur-[80px]" />

              <div className="absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-white/5 blur-[80px]" />

              {/* PATTERN */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>

              {/* MAIN CARD */}
              <div className="relative z-10 flex h-full flex-col justify-between p-[22px] sm:p-[40px]">
                {/* TOP CONTENT */}
                <div>
                  {/* BADGE */}
                  <div className="inline-flex items-center gap-[10px] rounded-full border border-white/10 bg-white/10 px-[16px] py-[10px] backdrop-blur-xl">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#fff]" />

                    <span className="text-[10px] sm:text-[12px] font-[700] uppercase tracking-[2px] text-white/85">
                      Industrial Chemical Solutions
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-[24px] text-white text-[28px] leading-[38px] sm:text-[38px] sm:leading-[54px] font-[700] tracking-[-1.5px]">
                    Trusted by
                    <br />
                    Manufacturers
                    <br />
                    Worldwide
                  </h3>

                  {/* FEATURES */}
                  <div className="mt-[32px] space-y-[18px]">
                    {[
                      "Premium TiO₂ Quality Standards",
                      "Reliable Global Supply Chain",
                      "Bulk  Packaging",
                      "Competitive Industrial Pricing",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-[14px]">
                        {/* ICON */}
                        <div className="mt-[3px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#BE8220]/20 text-[#fff] backdrop-blur-xl">
                          <CheckCircle2 size={16} strokeWidth={2.8} />
                        </div>

                        {/* TEXT */}
                        <p className="text-white/90 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px] font-[500]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM STATS */}
                <div className="mt-[30px] grid grid-cols-2 gap-[14px] sm:gap-[16px]">
                  {/* CARD 1 */}
                  <div className="rounded-[22px] border border-white/10 bg-white/10 p-[18px] sm:p-[22px] backdrop-blur-xl transition-all duration-300 hover:bg-white/15">
                    <h4 className="text-[#fff] text-[34px] sm:text-[40px] leading-none font-[700]">
                      99%
                    </h4>

                    <p className="mt-[10px] text-white/75 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px]">
                      Client Satisfaction
                    </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="rounded-[22px] border border-white/10 bg-white/10 p-[18px] sm:p-[22px] backdrop-blur-xl transition-all duration-300 hover:bg-white/15">
                    <h4 className="text-[#fff] text-[34px] sm:text-[40px] leading-none font-[700]">
                      24/7
                    </h4>

                    <p className="mt-[10px] text-white/75 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px]">
                      Supply Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>

  );
}
