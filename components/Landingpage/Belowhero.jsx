"use client";

import Image from "next/image";
import { ChevronRight, User, Phone, Mail } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// for requirement

import "swiper/css";
import Reveal from "./Reveal";
import Link from "next/link";
const products = [
  // {
  //   id: "titanium-dioxide-jinhai-r6618",
  //   image:"/bowl1.webp",
  //   grade: "Titanium Dioxide (TiO₂) – Jihani",
  //   code: "6628",
  //   desc: "High brightness and excellent durability for applications.",
  // },
  {
    id: "kronos-titanium-dioxide",
    image: "/bowl6.webp",
    grade: "Titanium Dioxide Kronos ",
    code: "R-2310",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-kmml-822",
    image: "/bowl2.webp",
    grade: "Titanium Dioxide (TiO₂) - Kmml",
    code: " 822",
    desc: "Excellent dispersibility and strong hiding power.",
  },
  {
    id: "titanium-dioxide-venator-tr92",
    image: "/bowl3.webp",
    grade: "Titanium Dioxide (TiO₂) - Venator ",
    code: " TR92",
    desc: "High whiteness and ideal for indoor applications.",
  },

  {
    id: "titanium-dioxide-kronos-r2220",
    image: "/bowl5.webp",
    grade: "Titanium Dioxide Kronos ",
    code: "R-2220",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-dawn-r2195",
    image: "/bowl4.webp",
    grade: "Titanium Dioxide (TiO₂) - Dawn",
    code: "2195",
    desc: "Premium titanium dioxide with excellent opacity.",
  },

  {
    id: "titanium-dioxide-kronos-r2310",
    image: "/bowl6.webp",
    grade: "Titanium Dioxide Kronos ",
    code: "R-2310",
    desc: "Premium titanium dioxide with excellent opacity.",
  },

  {
    id: "titanium-dioxide-r248",
    image: "/BOWL7.webp",
    grade: " Titanium dioxide 248",
    code: "R-248",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
];

export default function TitaniumSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    try {
      setLoading(true);
      const webisteUrl = window.location.hostname + window.location.pathname;
      const formData = {
        platform: webisteUrl || "Corechem Titanium Section Home Page",
        platformEmail: "corechemcorporation@gmail.com",
        supplierToken: "6a1965202b56a9ede272a9ca",
        name,
        phone,
        email,
        product: "Titanium Dioxide",
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        toast.success("Form Submitted Successfully");

        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Submission Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      return toast.error("Enter valid phone number");
    }

    await submitForm();
  };

  return (
    <>
      <Reveal>
        <section className="w-full bg-white mt-10 overflow-hidden">
          <div className="w-full mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] xl:grid-cols-[350px_1fr] gap-2 items-start">
              {/* LEFT CONTENT */}
              <div className="pt-2 ">
                <p className="text-[#10254d] font-[700] uppercase text-[15px] tracking-wide relative inline-block">
                  OUR PRODUCTS
                  <span className="absolute left-0 -bottom-2 w-[55px] h-[3px] bg-[#4B3089]"></span>
                </p>

                <h2 className="mt-5 text-[28px] nimate-pulse  font-[800] text-black">
                  High Performance <br />{" "}
                  <span className="text-[#4B3089]">Titanium Dioxide </span>
                </h2>

                <p className="mt-1   text-black text-[18px] leading-[28px] max-w-[250px]">
                  We offer a wide range of Titanium Dioxide grades suitable for
                  diverse industrial applications.
                </p>

                <button className="mt-4 flex items-center gap-2 text-[#4B3089] font-[700] text-[15px] hover:gap-3 transition-all duration-300">
                  View All Products
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* SWIPER SLIDER */}
              <div className="w-full overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  loop={true}
                  speed={900}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 1.3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  className="!overflow-visible"
                >
                  {products.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="h-[320px] bg-[#fafafa] border border-[#ececec] rounded-[10px]  py-2 px-2 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-row ">
                          <div className="flex  justify-center">
                            <Image
                              src={item.image}
                              alt="powder"
                              width={600}
                              height={400}
                              className="object-cover"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-3">
                            <p className="text-[#7a7f89] text-[13px] font-[600]">
                              {item.grade}
                            </p>

                            <h3 className="text-[#10254d] font-bold text-[25px] mt-1">
                              {item.code}
                            </h3>

                            <p className="mt-3 text-black text-[15px] leading-[24px]">
                              {item.desc}
                            </p>

                            <Link
                              href={`/products/${item.id}`}
                              className="mt-5 flex items-center justify-around gap-2 text-[#4B3089] text-[15px] font-[700]"
                            >
                              View Details
                              <ChevronRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="relative z-10 mt-8 px-4 lg:px-8">
        <div className="mx-auto w-full rounded-[28px] border border-white/20 bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:p-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center  mb-5">
            Titanium Dioxide Ki Har Requirement Ka Solution Yahan Milega!
          </h2>

          <p className="mx-auto text-center mb-6 max-w-4xl">
            From paints and coatings to plastics, inks, and cosmetics — we
            supply premium-quality Titanium Dioxide for all industrial
            applications. Fill out the form below, and our team will contact you
            within 24 hours.
          </p>

          <form onSubmit={handleSubmit}>
            {" "}
            {/* Full Name */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">
              {" "}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#4B3089] focus:bg-white"
                />
              </div>
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#4B3089] focus:bg-white"
                />
              </div>
              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#4B3089] focus:bg-white"
                />
              </div>
              {/* Requirmenst Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Requirements"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#4B3089] focus:bg-white"
                />
              </div>
              <div className="hidden md:flex  justify-center items-center  ">
                <button className="hidden bg-[#423b90] text-white rounded-2xl px-5 py-3 md:flex  " type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Request Quote →"}
                </button>
              </div>
            </div>
            {/* Button */}
            <div className=" lg:hidden flex xl:hidden  mt-3 justify-center items-center">
              {" "}
              <button className="bg-[#423b90] rounded-2xl  text-white px-5 py-3" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Request Quote →"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
