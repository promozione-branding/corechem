
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  ChevronDown,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { FaPhoneAlt, FaWhatsapp, FaClipboardList } from "react-icons/fa";
import ContactForm from "../Popup";
import { handleCallClick } from "@/lib/track";
import PriceMarquee from "./PriceMarquee";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      {/* ================= TOP BAR ================= */}
      <div className="relative z-50 w-full bg-[#c8921c]">
        <div className="flex h-[44px] items-center overflow-hidden">
          {/* LEFT - CONTACT DETAILS (DESKTOP ONLY) */}
          <div className="hidden xl:flex shrink-0 items-center gap-4 px-4 text-[11px] text-white 2xl:gap-5 2xl:px-6 2xl:text-[12px]">

            <a
              href="mailto:corechemcorporation@gmail.com"
              className="flex items-center gap-2 hover:text-[#c8921c]"
            >
              <Mail className="h-3.5 w-3.5 text-[#c8921c]" />
              corechemcorporation@gmail.com
            </a>

            <div className="h-3 w-px bg-white/30" />

            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#c8921c]" />
              Delhi, India
            </div>

            <div className="h-3 w-px bg-white/30" />

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#c8921c]" />
              GST NO. 07EOXPG8261J1Z5
            </div>
          </div>

          {/* CENTER - YELLOW MARQUEE */}
          <div className="min-w-0 flex-1 overflow-hidden bg-[#c8921c]">
            <PriceMarquee onQuoteClick={() => setIsOpen(true)} />
          </div>

          {/* RIGHT - QUOTE BUTTON (DESKTOP ONLY) */}
          <div className="hidden shrink-0 items-center px-4 xl:flex 2xl:px-8">
            <button
              onClick={() => setIsOpen(true)}
              className="whitespace-nowrap rounded-md bg-[#062347] px-5 py-2 text-[12px] font-bold text-white transition-all duration-300 hover:bg-[#04172e]"
            >
              Get Free Quote →
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="h-[80px] bg-white overflow-hidden shadow-sm">
        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* LOGO */}
          <Link href="/" className="shrink-0 relative">
            <Image
              src="/logo4.png"
              alt="Logo"
              width={260}
              height={100}
              priority
              className="h-auto w-[160px] sm:w-[220px] lg:w-[340px] sm:scale-100 scale-150"
            />
            <p className="md:hidden block absolute top-26.5 left-6 text-[8px] text-black">
              GST NO. 07EOXPG8261J1Z5
            </p>
          </Link>

          <div>
            <a href="tel:+919818544039" className="bg-[#c8921c] md:hidden px-2 py-3 text-xs text-white rounded-xl">
              Get Free Quote
            </a>
          </div>


          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center gap-10">
            <Link
              href="/inquiry"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              Home
            </Link>

            <Link
              href="/inquiry"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              About Us
            </Link>

            {/* PRODUCTS */}
            <div className="group relative">

              <Link href="/inquiry">


                <button className="flex items-center gap-2 font-semibold text-[17px] hover:text-[#c8921c]">
                  Our Products
                </button>
              </Link>


            </div>

            <Link
              href="/inquiry"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              Contact Us
            </Link>
          </nav>

          {/* PHONE */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8921c]">
              <Phone className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Call Anytime
              </p>

              <a onClick={() => handleCallClick({ source: "Website inquiry page", obj: "N/A" })}
                href="tel:+919818544039"
                className="font-bold text-[#062347]"
              >
                +91 9818544039
              </a>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="xl:hidden"
          >
            {mobileMenu ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-screen w-[320px] bg-white shadow-2xl transition-all duration-300 z-[999999]
        ${mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
          }`}
      >

        <div className="flex items-center justify-between border-b p-5">
          <h3 className="font-bold text-lg">
            Menu
          </h3>

          <button onClick={() => setMobileMenu(false)}>
            <X />
          </button>
        </div>

        <div onClick={() => setMobileMenu(false)} className="flex flex-col p-6">

          <Link href="/inquiry" className="py-3 font-medium">
            Home
          </Link>

          <Link href="/inquiry" className="py-3 font-medium">
            About Us
          </Link>

          <Link href="/inquiry" className="py-3 font-medium">
            Industries
          </Link>



          <Link href="/inquiry" className="py-3 font-medium">
            Contact Us
          </Link>

          <div className="mt-6 border-t pt-5">
            <Link href="#">


            </Link>

            {/* <div className="max-h-[300px] overflow-y-auto">

              {categories?.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="block py-2 text-sm text-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div> */}
          </div>

          <a onClick={() => handleCallClick({ source: "Website inquiry page", obj: "N/A" })}
            href="tel:+919818544039"
            className="mt-6 rounded-lg bg-[#c8921c] py-3 text-center font-semibold text-white"
          >
            Call Now
          </a>
          <a onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: "N/A" })}
            href="https://wa.me/919818544039"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Connect on WhatsApp</span>
          </a>

        </div>
      </div>

      {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}

      {/* ================= MOBILE BOTTOM BAR ================= */}

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] block w-full md:hidden">

        <style jsx>{`
    @keyframes bottomMarquee {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-50%, 0, 0);
      }
    }

    .bottom-marquee-track {
      display: flex;
      flex-wrap: nowrap;
      width: max-content;
      animation: bottomMarquee 32s linear infinite;
      will-change: transform;
    }

    .bottom-marquee-item {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      white-space: nowrap;
    }

    @media (prefers-reduced-motion: reduce) {
      .bottom-marquee-track {
        animation: none;
      }
    }
  `}</style>

        {/* ================= YELLOW MARQUEE ================= */}
        <div className="relative w-full h-[40px] overflow-hidden bg-[#c8921c] py-1">

          <div className="bottom-marquee-track">

            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="bottom-marquee-item"
              >
                <span className="inline-block shrink-0 whitespace-nowrap px-5 text-[20px] font-bold leading-[1.5] tracking-wider text-white">
                  COA & TDS with every lot. GST invoices,
                  24hrs Fast dispatch across India.
                  Get today's rate in 2 minutes
                </span>

                <span className="shrink-0 px-4 text-lg text-white">
                  ✦
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="w-full border-t border-white/10 bg-[#062347] shadow-[0_-5px_30px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-3">

            {/* CALL */}
            <Link
              onClick={() =>
                handleCallClick({
                  source: "Website inquiry page",
                  obj: "N/A",
                })
              }
              href="tel:+919818544039"
              className="flex flex-col items-center justify-center gap-1 border-r border-white/10 py-3 text-white transition hover:bg-white/10"
            >
              <FaPhoneAlt className="text-lg text-[#c8921c]" />
              <span className="text-xs font-semibold">Call</span>
            </Link>

            {/* ENQUIRY */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex flex-col items-center justify-center gap-1 border-r border-white/10 py-3 text-white transition hover:bg-white/10"
            >
              <FaClipboardList className="text-lg text-[#c8921c]" />
              <span className="text-xs font-semibold">Enquiry</span>
            </button>

            {/* WHATSAPP */}
            <Link
              onClick={() =>
                handleWhatsappClick({
                  source: "Website inquiry page",
                  obj: "N/A",
                })
              }
              href="https://wa.me/919818544039"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 bg-[#25D366] py-3 text-white"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-xs font-bold">WhatsApp</span>
            </Link>

          </div>
        </div>
      </div>

    </header>
  );
}