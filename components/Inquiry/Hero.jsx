"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Deals = dynamic(() => import("./Deals"), {
  loading: () => null,
});

const ContactForm = dynamic(() => import("../Popup"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://brandbnalo.com/api/form/add", {
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
      });

      if (response.ok) {
        toast.success("Inquiry Submitted Successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
          product: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit inquiry");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= DESKTOP HERO ================= */}
      <section className="relative hidden  w-full overflow-hidden md:block md:h-[95vh] ">
        {/* Optimized Background Image */}
        <Image
          src="/corechem-2.webp"
          alt="Corechem Corporation Chemical Products"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover "
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Quote Form */}
        <div className="absolute right-5 top-1/2 z-10 w-[340px] -translate-y-1/2 ">
          <div className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <h3 className="text-center text-2xl font-bold text-[#062347]">
              Request a Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
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
      </section>

      {/* ================= MOBILE HERO ================= */}
      <section onClick={()=>{setIsOpen(true)}} className="relative block md:hidden">
        <div className="relative aspect-[16/9] h-[390px] w-full overflow-hidden">
          <Image
            src="/corechem-1.webp"
            alt="Corechem Corporation"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Below-fold content */}
      <Deals />

           {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}

    </>
  );
}