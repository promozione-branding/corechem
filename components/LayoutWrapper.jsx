"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Loaded only when actually rendered, so /inquiry (which hides all of this)
// no longer downloads Navbar + Footer + Data.js (~740 KB) + popup code.
const Navbar = dynamic(() => import("@/components/Landingpage/Navbar"));
const Footer = dynamic(() => import("@/components/Landingpage/Footer"));
const StickyFooter = dynamic(() => import("./StickyFooter"));
const AutoPopupForm = dynamic(() => import("@/components/AutoPopupForm"), {
  ssr: false,
});

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/inquiry");

  return (
    <>
      {!hideLayout && <AutoPopupForm />}
      {!hideLayout && <Navbar />}
      {!hideLayout && <StickyFooter />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}