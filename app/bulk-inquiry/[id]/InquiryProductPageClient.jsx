"use client";

import React, { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";

import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// import Enquiry from "@/components/Enquiry";

import {
  ShieldCheck,
  Droplets,
  PackageCheck,
  Factory,
  Download,
  Phone,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { redirect } from "next/navigation";
import { handleCallClick, handleWhatsappClick } from "@/lib/track";

export default function InquiryProductPageClient({ params }) {
  const { id } = React.use(params);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const allProducts = categories.flatMap((c) => c.products);

  const product = allProducts.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(product?.image?.[0]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: product?.name || "",
    message: `I'm interested in ${product?.name || ""}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!form.phone || form.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        platform: "Corechem Corporation",
        platformEmail: "corechemcorporation@gmail.com",
        supplierToken: "6a1965202b56a9ede272a9ca",
        name: form.name,
        phone: form.phone,
        email: form.email,
        product: form.product,
        message: form.message,
        place: "Website Landing Page",
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload,
        {
          validateStatus: (status) => status >= 200 && status < 500,
        },
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Inquiry Submitted Successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          product: product?.name || "",
          message: `I'm interested in ${product?.name || ""}`,
        });
      } else {
        toast.error("Failed to submit inquiry");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (!product) {
    redirect("/");
  }

  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "High Purity",
      desc: "Premium Titanium Dioxide products with excellent consistency and industrial-grade quality.",
    },

    {
      icon: <Droplets size={34} />,
      title: "Superior Dispersion",
      desc: "Engineered for smooth blending and reliable performance in multiple applications.",
    },

    {
      icon: <PackageCheck size={34} />,
      title: "Reliable Supply",
      desc: "Consistent product availability and dependable delivery for uninterrupted operations.",
    },

    {
      icon: <Factory size={34} />,
      title: "Industrial Performance",
      desc: "Suitable for coatings, plastics, inks, rubber, paper, and industrial manufacturing.",
    },
  ];

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>

        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/parallex.jpg')",
        }}
        className="relative  overflow-hidden bg-cover bg-center"
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/50" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/70 via-white/40 to-blue-100/70" />

        {/* BLURS */}
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-200/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl" />

        {/* CONTENT */}
        <div className="relative  grid w-full gap-10 px-4 py-8 md:px-8 lg:py-10 xl:py-18 lg:grid-cols-3 lg:items-center ">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-[#BE8220] shadow-sm">
              Trusted Titanium Dioxide Supplier
            </span>

            <h1 className="mt-8 text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[#1e293b] ">
              {product.name}
            </h1>

            <p className="mt-8 max-w-2xl text-sm lg:text-md xl:text-lg leading-8 text-black md:text-xl">
              {product.overview}
            </p>

            <p className="text-3xl font-bold text-black mt-6">
              <span className="text-3xl">&#8377;</span> {product.price}{" "}
              <span className="text-lg mb-2">/KG</span>
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a onClick={() => handleCallClick({ source: "Website inquiry page", obj: product.name })}
                href="tel:+919818544039"
                // onClick={() => setIsFormOpen(true)}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#BE8220] px-7 py-4 font-semibold text-white shadow-xl transition hover:bg-[#e5b712] capitalize"
              >
                get instant price
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: product.name })}
                href={`https://wa.me/+919818544039?text=Hello I am interested in ${product.name}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-7 py-4 font-semibold text-green-700 transition hover:bg-green-100"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* BG EFFECT */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-orange-200/30 to-blue-200/30 blur-2xl" />

            {/* CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
              <div className="relative h-[340px] md:h-[400px] overflow-hidden rounded-[28px] ">
                <Image
                  src={activeImage?.src}
                  alt={activeImage?.alt}
                  fill
                  priority
                  className="object-contain transition duration-500 hover:scale-105"
                />
              </div>

              {/* THUMBNAILS */}
              {product.image?.length > 1 && (
                <div className="mt-5 flex gap-4">
                  {product.image.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`overflow-hidden rounded-2xl border-2 transition ${activeImage === img
                        ? "border-[#BE8220]"
                        : "border-gray-200"
                        }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={90}
                        height={90}
                        className="h-[70px] md:h-[90px] w-[90px] object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-[36px] border border-white bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              {/* TOP */}
              <div className="bg-[#BE8220] p-3 lg:p-4 xl:px-8 xl:py-8 text-white">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">
                  Technical Specifications
                </h3>

                <p className="mt-3 text-white/90">
                  Product details and industrial-grade specifications.
                </p>
              </div>

              {/* SPECS */}
              <div className="space-y-5 p-8">
                {product.specs?.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-slate-100 pb-4"
                  >
                    <span className="font-semibold text-[#1e293b]">
                      {spec.label}
                    </span>

                    <span className="text-black">{spec.value}</span>
                  </div>
                ))}

                {/* CTA */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="relative bg-[#f8fafc] py-8 lg:py-10 xl:py-20">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50/40" />

        <div className="relative mx-auto grid w-full gap-12 px-4 md:px-18 lg:px-20 lg:grid-cols-[1fr_420px] items-start">
          {/* DESCRIPTION */}
          <div className="relative">
            <span className="font-semibold uppercase tracking-wide text-[#BE8220]">
              Product Overview
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-[#1e293b] md:text-5xl">
              Industrial Titanium Dioxide Solutions
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-8 text-black">
              {Array.isArray(product.description) ? (
                product.description.map((block, i) => {
                  if (block.type === "h2")
                    return (
                      <h2
                        key={i}
                        className="mt-10 text-3xl font-bold text-[#1e293b]"
                      >
                        {block.text}
                      </h2>
                    );

                  if (block.type === "p")
                    return (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: block.text,
                        }}
                      />
                    );

                  if (block.type === "ul")
                    return (
                      <ul key={i} className="space-y-5">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#BE8220]" />

                            <span
                              dangerouslySetInnerHTML={{
                                __html: item,
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    );
                })
              ) : (
                <p>{product.description}</p>
              )}
            </div>
          </div>

          {/* STICKY FORM */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-[36px] border border-white bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                {/* HEADER */}
                <div className="bg-gradient-to-r from-[#BE8220] to-[#d89a31] px-8 py-8 text-white">
                  <h3 className="text-3xl font-bold capitalize">
                    Get a Free Quote
                  </h3>

                  <p className="mt-3 text-white/90">
                    Get pricing, technical details, and supply information for
                    this Titanium Dioxide product.
                  </p>
                </div>

                {/* FORM */}
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* NAME */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#1e293b]">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 text-slate-700 outline-none transition focus:border-[#BE8220] focus:bg-white"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#1e293b]">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 text-slate-700 outline-none transition focus:border-[#BE8220] focus:bg-white"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#1e293b]">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                        placeholder="Enter your phone number"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 text-slate-700 outline-none transition focus:border-[#BE8220] focus:bg-white"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#1e293b]">
                        Message
                      </label>

                      <textarea
                        rows={5}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-slate-700 outline-none transition focus:border-[#BE8220] focus:bg-white"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#BE8220] font-semibold text-white shadow-lg transition hover:bg-[#a36f1d] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Submitting..." : "Submit Inquiry"}
                    </button>

                    {/* ACTIONS */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <a
                        href="/PRODUCT CATALOGUE.pdf"
                        download
                        className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#BE8220] hover:text-[#BE8220]"
                      >
                        <Download className="h-4 w-4" />
                        Brochure
                      </a>

                      <a onClick={() => handleCallClick({ source: "Website inquiry page", obj: "N/A" })}
                        href="tel:+919818544039"
                        className="flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-[#BE8220] transition hover:bg-orange-100"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*add related prods here  */}
      {/* RELATED PRODUCTS */}
      <section className="relative overflow-hidden bg-white py-6 md:py-14">
        <div className="relative mx-auto w-full px-4 md:px-20">
          {/* FIND CURRENT CATEGORY */}
          {(() => {
            const currentCategory = categories.find((category) =>
              category.products.some((p) => p.id === product.id),
            );

            const relatedProducts =
              currentCategory?.products
                .filter((p) => p.id !== product.id)
                .slice(0, 6) || [];

            if (relatedProducts.length === 0) return null;

            return (
              <>
                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold uppercase tracking-[2px] text-slate-600">
                    Related Products
                  </span>

                  <h2 className="mt-6 text-4xl font-extrabold tracking-[-1px] text-[#0f172a] md:text-5xl">
                    Explore Similar Titanium Dioxide Products
                  </h2>
                </div>

                {/* PRODUCTS GRID */}
                <div className="mt-8 md:mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {relatedProducts.map((item, index) => (
                    <Link
                      key={index}
                      href={`/products/${item.id}`}
                      className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(15,23,42,0.10)]"
                    >
                      {/* IMAGE */}
                      <div className="relative h-[400px] overflow-hidden bg-[#f8fafc]">
                        <Image
                          src={item.image?.[0]?.src}
                          alt={item.image?.[0]?.alt}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-4">
                        <h3 className="text-2xl font-bold leading-tight text-[#0f172a] transition group-hover:text-[#BE8220]">
                          {item.name}
                        </h3>

                        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                          {item.metaDescription}
                        </p>

                        {/* BUTTON */}
                        <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0f172a] transition group-hover:gap-3 group-hover:text-[#BE8220]">
                          View Product
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {/* {isFormOpen && (
        <Enquiry
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )} */}
    </>
  );
}
