

"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

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

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);

  // ==============================
  // HANDLE INPUT
  // ==============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));
  };

  // ==============================
  // SUBMIT FORM DIRECTLY
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!form.product) {
      toast.error("Please select a product");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your requirements");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        platform: "Corechem Corporation",
        platformEmail: "corechemcorporation@gmail.com",
        supplierToken: "6a1965202b56a9ede272a9ca",
        name: form.name.trim(),
        phone: form.phone,
        email: form.email.trim(),
        product: form.product,
        message: form.message.trim(),
        place: "Website Landing Page",
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (res.status >= 200 && res.status < 300) {
        if (res.data?.success === false) {
          toast.error(
            res.data?.message || "Failed to submit inquiry"
          );
          return;
        }

        toast.success("Inquiry Submitted Successfully!");

        setForm({ ...initialForm });
      }
    } catch (error) {
      console.error("SUBMIT FORM ERROR:", error);

      toast.error(
        error?.response?.data?.message ||
        "Server error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-6 md:py-15">

      {/* BACKGROUND: /bag/try2.webp is not in the repo (it 404'd on every load);
          the 90% navy overlay below is what was actually visible. */}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#062347]/90" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div className="hidden text-white md:block">
            <span className="inline-block rounded-full border border-[#c8921c] px-5 py-2 text-sm font-medium text-[#c8921c]">
              Premium Titanium Dioxide Supplier
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Looking for High-Quality
              <span className="block text-[#c8921c]">
                Titanium Dioxide?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Get premium-grade Titanium Dioxide for paints,
              plastics, coatings, inks, rubber, paper, and
              industrial applications. Contact our experts
              today for pricing, bulk orders, and technical
              support.
            </p>

            <div className="mt-10 hidden gap-4 sm:grid">
              {[
                "High Whiteness",
                "Excellent Opacity",
                "Bulk Supply Available",
                "Competitive Pricing",
                "Fast Delivery",
                "Industrial Grade Quality",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          {/* ========================= */}
          {/* CONTACT FORM */}
          {/* ========================= */}

          <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:p-8">

            <h3 className="text-center text-xl font-bold text-[#062347] md:text-3xl">
              Request a Free Quote
            </h3>

            <p className="mt-2 text-center text-sm text-gray-500 md:text-base">
              Fill out the form and our team will contact
              you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-3 md:mt-8"
            >

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* PHONE */}
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* PRODUCT */}
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full rounded-xl border bg-white p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              >
                <option value="">Select Product</option>

                {products.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us your requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* DIRECT SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-[#c8921c] py-4 font-semibold text-white transition hover:bg-[#b88418] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting Inquiry..."
                  : "Get Free Quote"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}