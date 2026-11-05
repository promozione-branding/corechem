
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

// Load Deals only when the user scrolls near that section
const Deals = dynamic(() => import("./Deals"), {
  loading: () => null,
});

// Popup is loaded only when opened
const ContactForm = dynamic(() => import("../Popup"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDeals, setShowDeals] = useState(false);

  const dealsRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const products = [
    "Titanium Dioxide",
    "Titanium Dioxide Rutile",
    "Color Pigment",
    "Pigment Powder",
    "Lithopone",
    "Caustic Soda",
    "Calcium Carbonate",
    "Optical Brightener",
    "Carbon Black",
  ];

  // Lazy load Deals when approaching viewport
  useEffect(() => {
    const element = dealsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDeals(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Form input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit inquiry
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://brandbnalo.com/api/form/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            platform: "Corechem Corporation",
            platformEmail: "corechemcorporation@gmail.com",
            supplierToken: "6a1965202b56a9ede272a9ca",
            name: form.name,
            phone: form.phone,
            email: form.email,
            product: form.product,
            message: form.message,
            place: "Website Landing Page",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      toast.success("Inquiry Submitted Successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative w-full overflow-hidden h-[390px] md:h-[95vh] min-h-[390px]">

        {/* Responsive Hero Image */}
        <picture className="absolute inset-0 block">
          {/* Mobile image */}
          <source
            media="(max-width: 767px)"
            srcSet="/corechem-1.webp"
            type="image/webp"
          />

          {/* Desktop image */}
          <Image
            src="/corechem-2.webp"
            alt="Corechem Corporation Chemical Products"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {/* ================= DESKTOP QUOTE FORM ================= */}

        <div className="absolute right-5 top-1/2 z-10 hidden w-[340px] -translate-y-1/2 md:block lg:right-10">

          <div className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

            <h3 className="text-center text-2xl font-bold text-[#062347]">
              Request a Free Quote
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    setForm((prev) => ({
                      ...prev,
                      phone: value,
                    }));
                  }
                }}
                required
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
              />

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
              >
                <option value="">Select Product</option>

                {products.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                rows={3}
                placeholder="Tell us your requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#c8921c] py-3 font-semibold text-white transition hover:bg-[#b88418] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Get Free Quote"}
              </button>
            </form>

          </div>
        </div>

        {/* ================= MOBILE QUOTE BUTTON ================= */}

     

      </section>

      {/* ================= BELOW FOLD DEALS ================= */}

      <div ref={dealsRef}>
        {showDeals && <Deals />}
      </div>

      {/* ================= CONTACT POPUP ================= */}

      {isOpen && (
        <ContactForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}
