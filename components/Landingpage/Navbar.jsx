"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { handleCallClick, handleWhatsappClick, } from "@/lib/track";
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
  Download,
} from "lucide-react";

import { categories } from "@/Data";
import ContactForm from "../Popup";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[999999] w-full bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="hidden relative z-50 lg:flex h-[42px] items-center justify-between bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] px-8 xl:px-14">
        <div className="flex items-center gap-5 text-white text-[13px]">
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 text-[#c8921c]" />
            <a
              className="cursor-default"
              href="mailto:corechemcorporation@gmail.com"
            >
              corechemcorporation@gmail.com
            </a>
          </div>

          <div className="h-3 w-px bg-white/30" />

          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-[#c8921c]" />
            Delhi, India
          </div>

          <div className="h-3 w-px bg-white/30" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3 w-3 text-[#c8921c]" />
            GST NO. 07EOXPG8261J1Z5
          </div>
        </div>

        <div className="flex items-center gap-5 text-white">
          <a
            href="/PRODUCT CATALOGUE.pdf"
            download
            className="flex underline items-center text-sm gap-2"
          >
            <Download className="h-4 w-4 text-[#F5F6F9]" />
            Download Brochure
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#F5F6F9] px-7 py-[11px] text-[14px] font-semibold text-[#2B4D9D] "
          >
            Get Free Quote →
          </button>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="h-[85px] bg-white">
        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-2 sm:px-6 lg:px-10">
          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo4.png"
              alt="Logo"
              width={260}
              height={100}
              priority
              className="h-auto w-[195px] sm:w-[220px] lg:w-[340px]"
            />
          </Link>

          <div className="gap-2 flex">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#2B4D9D] md:hidden text-sm px-2 py-3 text-white rounded-xl"
            >
              Get Quote
            </button>
            <a
              href="/PRODUCT CATALOGUE.pdf"
              download
              className="flex underline bg-[#2B4D9D]  md:hidden px-3 py-2 items-center rounded-xl text-sm gap-2"
            >
              <Download className="h-5 w-5 text-[#F5F6F9]" />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center gap-10">
            <Link
              href="/"
              className="font-semibold text-[17px] hover:text-[#2B4D9D]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-semibold text-[17px] hover:text-[#2B4D9D]"
            >
              About Us
            </Link>

            {/* PRODUCTS */}
            <div className="group relative">
              <Link href="/products">
                <button className="flex items-center gap-2 font-semibold text-[17px] hover:text-[#2B4D9D]">
                  Our Products
                  <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                </button>
              </Link>

              <div className="invisible absolute left-0 top-full z-[999999] mt-5 w-[350px] rounded-2xl border border-slate-200 bg-white opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
                <div className="max-h-[450px] overflow-y-auto p-5">
                  {categories?.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.id}`}
                      className="block border-b border-slate-100 py-3 text-[16px] font-medium text-slate-800 transition hover:translate-x-2 hover:text-[#2B4D9D]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/our-blogs"
              className="font-semibold text-[17px] hover:text-[#2B4D9D]"
            >
              Articles & Resources
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-[17px] hover:text-[#2B4D9D]"
            >
              Contact Us
            </Link>
          </nav>

          {/* PHONE */}
          <div className="hidden lg:ml-90 xl:ml-0 lg:flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2B4D9D]">
              <Phone className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Call Anytime</p>

              <a
                href="tel:+919818544039"
                onClick={() => handleCallClick({ source: "Website Navbar", })}
                className="font-bold text-[#062347]"
              >
                +91 9818544039
              </a>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="xl:hidden "
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`xl:hidden fixed top-0 right-0 h-screen w-[320px] bg-white shadow-2xl transition-all duration-300 z-[999999]
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h3 className="font-bold text-lg">Menu</h3>

          <button onClick={() => setMobileMenu(false)}>
            <X />
          </button>
        </div>

        <div onClick={() => setMobileMenu(false)} className="flex flex-col p-6">
          <Link href="/" className="py-3 font-medium">
            Home
          </Link>

          <Link href="/about" className="py-3 font-medium">
            About Us
          </Link>

          <Link href="/products" className="py-3 font-medium">
            Products
          </Link>

          <Link href="/our-blogs" className="py-3 font-medium">
            Articles & Resources
          </Link>

          <Link href="/shipping" className="py-3 font-medium">
            Shipping Policy
          </Link>
          <Link href="/return-refund" className="py-3 font-medium">
            Return & Refund
          </Link>
          <Link href="/contact" className="py-3 font-medium">
            Contact Us
          </Link>

          <div className="mt-6 border-t pt-5">
            <Link href="/products">
              <h4 className="mb-4 font-semibold">Our Products</h4>
            </Link>

            <div className="max-h-[300px] overflow-y-auto">
              {categories?.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="block py-2 text-sm text-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>


          <a
            href="tel:+919818544039"
            onClick={() => handleCallClick({ source: "Website Navbar", })}
            className="mt-6 rounded-lg bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] py-3 text-center font-semibold text-white"
          >
            Call Now
          </a>
          <a
            href="/PRODUCT CATALOGUE.pdf"
            download
            className="flex p-4 text-center justify-center underline items-center text-sm gap-2"
          >
            <Download className="h-4 w-4 text-[#2B4D9D]" />
            Download Brochure
          </a>
        </div>
      </div>

      {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header >
  );
}
