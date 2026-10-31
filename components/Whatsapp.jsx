'use client'
import { handleWhatsappClick } from "@/lib/track";
import { usePathname } from "next/navigation";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Whatsapp = () => {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
  const hideLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/inquiry");
  return (
    <>

      {!hideLayout && <a
        onClick={() => handleWhatsappClick({ source: "Sticky WhatsApp", })}
        href={"https://wa.link/2fpjmq"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with corechem corporation"
        className="fixed bottom-18 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a>}



    </>
  );
};

export default Whatsapp;
