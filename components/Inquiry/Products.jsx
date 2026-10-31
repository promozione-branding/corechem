"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "../Popup";
import Category from "./Category";
import Image from "next/image";
import { handleWhatsappClick } from "@/lib/track";

const product = [
  {
    id: "titanium-dioxide-jinhai-r6618",
    image: "/bowl1.webp",
    grade: "Titanium Dioxide (TiO₂) – Jihani",
    code: "6628",
    desc: "High brightness and excellent durability ",
    price: "290",
  },
  {
    id: "titanium-dioxide-kronos-r2310",
    image: "/bowl6.webp",
    grade: "Titanium Dioxide Kronos",
    code: "R-2310",
    desc: "Premium titanium dioxide with excellent opacity.",
    price: "285",
  },
  {
    id: "titanium-dioxide-kmml-822",
    image: "/bowl2.webp",
    grade: "Titanium Dioxide (TiO₂) - Kmml",
    code: "822",
    desc: "Excellent dispersibility and strong hiding power.",
    price: "280",
  },
  {
    id: "titanium-dioxide-venator-tr92",
    image: "/bowl3.webp",
    grade: "Titanium Dioxide (TiO₂) - Venator",
    code: "TR92",
    desc: "High whiteness and ideal for indoor applications.",
    price: "257",
  },
  {
    id: "titanium-dioxide-kronos-r2220",
    image: "/bowl5.webp",
    grade: "Titanium Dioxide Kronos",
    code: "R-2220",
    desc: "Premium titanium dioxide with excellent opacity.",
    price: "285",
  },
  {
    id: "titanium-dioxide-dawn-r2195",
    image: "/bowl4.webp",
    grade: "Titanium Dioxide (TiO₂) - Dawn",
    code: "2195",
    desc: "Premium titanium dioxide with excellent opacity.",
    price: "290",
  },
  // {
  //   id: "titanium-dioxide-r248",
  //   image: "/BOWL7.webp",
  //   grade: "Titanium dioxide 248",
  //   code: "R-248",
  //   desc: "Premium titanium dioxide with excellent opacity.",
  // },
];



//  const products = [
//     "Titanium Dioxide",
//     "Titanium Dioxide Rutile",
//     "Color Pigment",
//     "Pigment Powder",
//     "Lithopone",
//     "Caustic Soda",
//     "Calcium Carbonate",
//     "Optical Brightener",
//     "Carbon Black",
//   ];

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.phone || form.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        platform: "Corechem Corporation",
        supplierToken: "6a1965202b56a9ede272a9ca",
        platformEmail: "corechemcorporation@gmail.com",
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
          phone: "",
          email: "",
          product: "",
          message: "",
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
  return (
    <section className="pt-4 md:pt-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Heading */}
        <div className="text-center mb-5 md:mb-10">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-gray-600 mt-1">Explore our range</p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Autoplay, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {product.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`/inquiry/${product.id}`}
                className="  rounded-xl shadow-sm hover:shadow-lg transition bg-white "
              >
                {/* Image */}
                <div className=" bg-gray-100 flex items-center justify-center">
                  <Image
                    height={100}
                    width={100}
                    src={product.image}
                    alt={product.grade}
                    className="h-[250px] w-[270px] scale-130 md:scale-90 md:w-full md:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">
                    {product.grade}
                  </h3>

                  {/* {/* <p className="text-sm text-gray-500 mt-1">
                    Code: {product.code}
                  </p> */}

                  <p className="text-lg font-bold text-black mt-3">
                    <span className="text-lg">&#8377;</span> {product.price}{" "}
                    <span className="text-sm">/KG</span>
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="flex-1 text-center bg-black text-white py-2 rounded-lg text-lg hover:bg-gray-800"
                    >
                      View Details
                    </button>

                    <Link
                      href={"https://wa.link/2fpjmq"}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsappClick({ source: "Website inquiry page", obj: product.grade })
                      }}
                      target="_blank"
                      className="flex items-center justify-center gap-2 flex-1 bg-green-600 text-white py-4 rounded-lg text-lg   hover:bg-green-700"
                    >
                      <FaWhatsapp className="text-3xl" /> WhatsApp
                    </Link>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#062347] to-[#0a3a6e] py-4 md:py-6">
        <div className="container mx-auto px-4 py-4 ">
          <div className="flex flex-col items-center justify-between gap-5 md:py-6 rounded-3xl border border-[#c8921c]/30 bg-white/10 px-8 py-8 backdrop-blur-md md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Need a chemical not listed?
              </h2>
              <p className="mt-2 text-white/70">
                Our team can source custom chemicals and specialty products for
                your requirements.
              </p>
            </div>

            <Link
              href="https://wa.link/2fpjmq"
              onClick={() => handleWhatsappClick({ source: "Website inquiry page", obj: "N/A" })}
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#c8921c] to-[#e6b53a] px-5 py-3 md:px-8 md:py-4 font-semibold text-white shadow-[0_10px_30px_rgba(200,146,28,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,146,28,0.5)]"
            >
              {/* Shine Effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              {/* Pulse Dot */}

              <FaWhatsapp className="relative animate-bounce text-2xl md:text-3xl" />

              <span className="relative text-sm md:text-lg whitespace-nowrap">
                Chat With Us on WhatsApp
              </span>

              <FaArrowRight className="relative  text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Form Below Banner */}
        {/* <div className="bg-[#f8f8f8] md:hidden px-4 py-4">
          <div className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <h3 className="text-center text-xl font-bold text-[#062347]">
              Request a Free Quote
            </h3>

            <p className="mt-2 text-center text-sm text-gray-500">
              Fill out the form and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-2 space-y-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none focus:border-[#c8921c]"
              />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none focus:border-[#c8921c]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none focus:border-[#c8921c]"
              />

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none focus:border-[#c8921c]"
              >
                <option value="">Select Product</option>

                {products.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                rows="3"
                placeholder="Tell us your requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none focus:border-[#c8921c]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#c8921c] py-3 font-semibold text-white transition hover:bg-[#b88418]"
              >
                {loading ? "Submitting..." : "Get Free Quote"}
              </button>
            </form>
          </div>
        </div> */}
        <Category />
      </section>
      {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
  );
}
