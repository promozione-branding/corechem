
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
      <div className="hidden relative z-50 lg:flex h-[42px] items-center justify-between bg-[#062347] px-8 xl:px-14">

        <div className="flex items-center gap-5 text-white text-[13px]">

          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 text-[#c8921c]" />
            <a href="mailto:corechemcorporation@gmail.com">
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



          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#c8921c] hidden md:block px-7 py-[11px] text-[14px] font-semibold text-white hover:bg-[#b88312]"
          >
            Get Free Quote →
          </button>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="h-[85px] bg-white">

        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo4.png"
              alt="Logo"
              width={260}
              height={100}
              priority
              className="h-auto w-[200px] sm:w-[220px] lg:w-[340px]"
            />
          </Link>
          <div><a href="tel:+919818544039" className="bg-[#c8921c] md:hidden px-2 py-3 text-xs text-white rounded-xl">Get Free Quote</a></div>


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

            {/* <Link
              href="/our-blogs"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              Articles & Resources
            </Link> */}

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
            href="https://wa.link/2fpjmq"
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
      <div className="fixed bottom-0 left-0 right-0 z-[9999] block md:hidden">
        <div className="mx-2 mb-2 overflow-hidden rounded-2xl border border-white/10 bg-[#062347]/95 shadow-[0_-5px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <div className="grid grid-cols-3">

            {/* CALL */}
            <Link onClick={() => handleCallClick({ source: "Website inquiry page", obj: "N/A" })}
              href="tel:+919818544039"
              className="flex flex-col items-center justify-center gap-1 border-r border-white/10 py-3 text-white transition hover:bg-white/10"
            >
              <FaPhoneAlt className="text-lg text-[#c8921c]" />
              <span className="text-xs font-semibold">Call</span>
            </Link>

            {/* ENQUIRY */}
            <button
              onClick={() => setIsOpen(true)} // Your enquiry modal state
              className="flex flex-col items-center justify-center gap-1 border-r border-white/10 py-3 text-white transition hover:bg-white/10"
            >
              <FaClipboardList className="text-lg text-[#c8921c]" />
              <span className="text-xs font-semibold">Enquiry</span>
            </button>

            {/* WHATSAPP */}
            <Link onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: "N/A" })}
              href="https://wa.link/2fpjmq"
              target="_blank"
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